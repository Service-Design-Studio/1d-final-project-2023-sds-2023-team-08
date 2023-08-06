class DisputesController < ApplicationController
  before_action :set_dispute, only: %i[ show edit update destroy ]

  
  
# get 'users/:id/new_disputes_received', to: 'disputes#new_disputes_received'
  def new_disputes_received()
    
    num_disputes=Dispute.where("disputee_id = ? AND status = ?", params[:id],"Dispute Filed").length
    data={awaitingactionFTD: num_disputes}
    render json: data, status: :ok #http 200
  end

  #post 'users/:id/transactions/:id/withdraw_dispute', to: 'disputes#withdraw_dispute'
  def withdraw_dispute()
    dispute_params = params.permit(:date_and_time, :day_and_date)
    #date_and_time = params[:'date and time']
    #day_and_date = params[:'day and date']
    


    #update status and check if withdrawable
    #make sure user is the disputer
    
    dispute=Dispute.where("disputer_id = ?  AND transaction_id = ?", params[:id],params[:transactions_id]).first
    if dispute
      if dispute.is_withdrawable(params[:id])
        dispute.status="Withdrawn"
        dispute.further_action={
           withdraw_date_time: dispute_params[:date_and_time],
           withdraw_day_date:dispute_params[:day_and_date] 
      }.to_json
      if dispute.save
        data={success: "true"}
        render json: data, status: :ok #http 200
      else
        data={success: "false",error: "cant save"}
        render json: data, status: :unprocessable_entity
      end
        
        

      else
      data={success: "false", error: "not withdrawable status"}
      render json: data, status: :unprocessable_entity #http 422
      
      end
    else
      data={success: "false", error: "no dispute exist.wrong transaction id or user is not disputer"}
      render json: data, status: :unprocessable_entity #http 422
    end
  
  end 
  #post 'users/:id/transactions/:id/refute_dispute', to: 'disputes#refute_dispute'
  def refute_dispute()
    dispute_params = params.permit(:date_and_time, :day_and_date, :refutereason)
    
    #update status and check if it 'Raised to DBS' or 'Dispute Filed'
    #make sure user is the disputee
    dispute=Dispute.where("disputee_id = ?  AND transaction_id = ?", params[:id],params[:transactions_id]).first
    puts dispute==nil
    if dispute
      if dispute.status=='Raised to DBS' || dispute.status=='Dispute Filed'
        dispute.status='Refuted'
        dispute.further_action={
           refute_date_time: dispute_params[:date_and_time],
           refute_day_date:dispute_params[:day_and_date] ,
           refutereason: dispute_params[:refutereason]
      }.to_json
      if dispute.save
        data={success: "true"}
        render json: data, status: :ok #http 200
      else
        data={success: "false",error: "cant save"}
        render json: data, status: :unprocessable_entity
      end
        

      else
      data={success: "false", error: "status not raised to DBS or dispute filed"}
      render json: data, status: :unprocessable_entity #http 422
      end
    else
      data={success: "false", error: "no dispute exist.wrong transaction id or user is not disputer"}
      render json: data, status: :unprocessable_entity #http 422
    end
    
  end 
   
  
  
  #post 'users/:id/transactions/:id/resolve_dispute', to: 'disputes#resolve_dispute'
  def resolve_dispute()

    #update status and check if it 'Raised to DBS' or 'Dispute Filed'
    #make sure user is the disputee
    #make sure to carry out the transaction in the same method that it was used
    dispute_params = params.permit(:date_and_time, :day_and_date, :comments)
    

    dispute=Dispute.where("disputee_id = ?  AND transaction_id = ?", params[:id],params[:transactions_id]).first
    if dispute
      if dispute.status=='Raised to DBS' || dispute.status=='Dispute Filed'
        

        dispute.status='Resolved'
        dispute.further_action={
           resolve_date_time: dispute_params[:date_and_time],
           resolve_day_date:dispute_params[:day_and_date ],
           
      }.to_json
        if dispute.save
          data={success: "true"}
          render json: data, status: :ok #http 200
        else
          data={success: "false",error: "cant save"}
          render json: data, status: :unprocessable_entity
        end

      else
      data={success: "false", error: "status not raised to DBS or dispute filed"}
      render json: data, status: :unprocessable_entity #http 422
      end
    else
      data={success: "false", error: "no dispute exist.wrong transaction id or user is not disputee"}
      render json: data, status: :unprocessable_entity #http 422
    end
    
    
  end
  #get 'users/:id/transactions/:id/refund_details', to: 'disputes#refund_details'
 def refund_details  #assuming intrabank
  
    
    transaction=Transaction.find(params[:transactions_id])
    disputee_acc=Account.where(account_number: transaction.recipient_account_number).first
    
    

    if transaction && disputee_acc
      
      isModeOfPaymentPaynow=(transaction.transaction_type=="FAST / PayNow Transfer")
      
      
      dispute=transaction.dispute
      dispute_reason_details=JSON.parse(dispute.dispute_reason_details)
      isWrongAmount=(dispute.dispute_reason=="Transfer Wrong Amount")
      

      data=[ {"refund details": {
    "transfer from acc name": disputee_acc.account_type,
    "transfer from acc number": transaction.recipient_account_number,
    "recipient name": Account.where(account_number: transaction.account.account_number).first.user.username,
    "recipient acc": transaction.account.account_number,
    "total amount": isWrongAmount ? transaction.amount-dispute_reason_details["correct_amount"] : transaction.amount,
    "mode of payment": isModeOfPaymentPaynow ? "FAST / PayNow Transfer" : "Account Transfer",
    "contact details": dispute_reason_details["contact_details"]

  }
    }]
    render json: data, status: :ok #http 200
    else
      data={success: "false", error: "unable to find transaction or disputee acc"}
      render json: data, status: :unprocessable_entity #http 422
    end

  end



  # GET /disputes or /disputes.json

  def index
    @disputes=Dispute.all
  end

  # GET user/:id/transaction_detail_for_disputes_involving_user
  def transaction_detail_for_disputes_involving_user
    user=User.find_by_id(params[:id])
    raise "User cannot be nil" if user.nil?
    begin
    data=Dispute.transaction_detail_for_disputes_involving_user(user)
    render json: data, status: :ok #http 200
    rescue => e
      data={success: "false", error: e.to_s}
      render json: data, status: :unprocessable_entity #http 422
    end
  end
  

  # GET /disputes/1 or /disputes/1.json
  def show
  end

  # GET /disputes/new
  

  def new
    

  end

  # GET /disputes/1/edit
  def edit
  end

  # POST /users/:id/transactions/:transactions_id/disputes
  def create

    disputer_id=params[:user_id]
    transaction_id=params[:transaction_id]
    dispute_params = params.permit(:date_and_time, :day_and_date, :reason,:comments ,:user,:transaction_ID,:contact_details,:correct_amount)
    date_and_time = dispute_params[:date_and_time]
    day_and_date = dispute_params[:day_and_date]
    dispute_reasons = dispute_params[:reason]
    dispute_comments= dispute_params[:comments]
    role=dispute_params[:user]#sender or recipient of funds
    params.inspect


    
    
    transaction=Transaction.find(transaction_id)
    if not transaction
      data={success: "false" , error: "unable to find transaction"}
      render json: data, status: :unprocessable_entity #http 422 
      return
    end
    #assume intrabank
    if(transaction.intrabank)
      senderIsDisputer=(transaction.account.user.id==disputer_id.to_i) #user who made transaction is disputer
      puts senderIsDisputer

      #if dispute is paynow related and disputer is the one who sends money, we should remove his recipient from his trf bef list
      #so warning will cont to appear for this recipient if he trf to this person again
      if senderIsDisputer && transaction.transaction_type=="FAST / PayNow Transfer"
        #get  recipient of this transaction and remove from users's paid_before phone numbers
        begin
          puts "delete"
        other_party=Account.where(account_number: transaction.recipient_account_number).first
        other_party_phone=other_party.user.phone
        Paynow.remove_from_paid_before(transaction.account.account_number,other_party_phone)
        rescue => e
          puts "Error occurred: #{e.message} . cant find other recipient account or error removing recipient's phone"
        end

      end

      transaction_recipient_account=Account.where(account_number: transaction.recipient_account_number).first
      if not transaction_recipient_account
        data={success: "false" , error: "unable to find recipient acc"}
        render json: data, status: :unprocessable_entity #http 422 
        return
      end
      isReasonUnknownTrf=(dispute_reasons=="Unknown Transaction")
      isWrongAmount=(dispute_reasons=="Transfer Wrong Amount")

      #contact details and coorect_amount
      if isWrongAmount
        contact_details=dispute_params[:contact_details]
        correct_amount=dispute_params[:correct_amount].to_f
      else
        contact_details=nil
        correct_amount=nil
      end
      
      transaction.dispute= Dispute.new(
        status: isReasonUnknownTrf ? "Raised to DBS" : "Dispute Filed",
        disputer_acc_id: senderIsDisputer ? transaction.account.id : transaction_recipient_account.id ,
        dispute_reason: dispute_reasons,
        disputee_id: senderIsDisputer ? transaction_recipient_account.user.id : transaction.account.user.id ,
        disputer_id: disputer_id,
        date_time:date_and_time,
        day_date:day_and_date,
        further_action:{ }.to_json,
      
        dispute_reason_details: { 
        "comments" => dispute_comments,
      "contact_details"=>contact_details,
      "correct_amount"=>correct_amount}.to_json

    )
      
    else
    #assume interbank -> assume disputer is sender
      transaction.dispute= Dispute.new(
        status: "Raised to DBS",
        disputer_acc_id:  transaction.account.id  ,
        dispute_reason: dispute_reasons,
        disputee_id: "",
        disputer_id: disputer_id,
        date_time:date_and_time,
        day_date:day_and_date,
        further_action:{ }.to_json,
      
        dispute_reason_details: { 
        "comments" => dispute_comments,
        "contact_details"=>contact_details,
        "correct_amount"=>correct_amount}.to_json

      )
      
    end
    if transaction.save
      #data={success: "true"}
      #render json: data, status: :ok #http 200
      data={success: "true" , error: dispute_params[:reason]}
      render json: data, status: :ok#http 422 
    else
      data={success: "false" , error: "unable to save dispute"}
      render json: data, status: :unprocessable_entity #http 422 
    end
  end

  # PATCH/PUT /disputes/1 or /disputes/1.json
  def update
    respond_to do |format|
      if @dispute.update(dispute_params)
        format.html { redirect_to dispute_url(@dispute), notice: "Dispute was successfully updated." }
        format.json { render :show, status: :ok, location: @dispute }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @dispute.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /disputes/1 or /disputes/1.json
  def destroy
    @dispute.destroy

    respond_to do |format|
      format.html { redirect_to disputes_url, notice: "Dispute was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dispute
      @dispute = Dispute.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def dispute_params
      params.fetch(:dispute, {})
    end
end
