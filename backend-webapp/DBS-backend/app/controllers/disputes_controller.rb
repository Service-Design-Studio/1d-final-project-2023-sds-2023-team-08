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
   
    date_and_time = params[:'date and time']
    day_and_date = params[:'day and date']
    


    #update status and check if withdrawable
    #make sure user is the disputer
    
    dispute=Dispute.where("disputer_id = ?  AND transaction_id = ?", params[:user_id],params[:transaction_id])
    if dispute
      if dispute.is_withdrawable
        dispute.status="Withdrawn"
        dispute.further_action={
           withdraw_date_time: date_and_time,
           withdraw_day_date:day_and_date 
      }.to_json
      data={success: "true"}
      render json: data, status: :ok #http 200
        

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

    date_and_time = params[:'date and time']
    day_and_date = params[:'day and date']
    refute_reason = params[:'refute reason']
    #update status and check if it 'Raised to DBS' or 'Dispute Filed'
    #make sure user is the disputee
    dispute=Dispute.where("disputee_id = ?  AND transaction_id = ?", params[:user_id],params[:transaction_id])
    
    if dispute
      if dispute.status=='Raised to DBS' || dispute.status=='Dispute Filed'
        dispute.status='Refuted'
        dispute.further_action={
           refute_date_time: date_and_time,
           refute_day_date:day_and_date ,
           refute: refute_reason
      }.to_json
        data={success: "true"}
        render json: data, status: :ok #http 200
        

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
    date_and_time = params[:'date and time']
    day_and_date = params[:'day and date']

    dispute=Dispute.where("disputee_id = ?  AND transaction_id = ?", params[:user_id],params[:transaction_id])
    if dispute
      if dispute.status=='Raised to DBS' || dispute.status=='Dispute Filed'
        

        dispute.status='Resolve'
        dispute.further_action={
           resolve_date_time: date_and_time,
           resolve_day_date:day_and_date 
      }.to_json

      

        
      data={success: "true"}
      render json: data, status: :ok #http 200
      else
      data={success: "false", error: "status not raised to DBS or dispute filed"}
      render json: data, status: :unprocessable_entity #http 422
      end
    else
      data={success: "false", error: "no dispute exist.wrong transaction id or user is not disputer"}
      render json: data, status: :unprocessable_entity #http 422
    end
    
    
  end
  #get 'users/:id/transactions/:id/refund_details', to: 'disputes#refund_details'
 


  # GET /disputes or /disputes.json

  def index
    @disputes=Dispute.all
  end

  # GET user/:id/transaction_detail_for_disputes_involving_user
  def transaction_detail_for_disputes_involving_user
    user=User.find_by_id(params[:user_id])
    raise "User cannot be nil" if user.nil?
    data=Dispute.transaction_detail_for_disputes_involving_user(user)
    render json: data, status: :ok #http 200
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

  # POST /users/:id/disputes/create
  def create
    date_and_time = params[:'date and time']
    day_and_date = params[:'day and date']
    dispute_reasons = params[:'reason']
    dispute_comments= params[:'comments']
    transaction_id=params[:'transaction ID']
    transaction=Transaction.find(params[:transaction_id])
    disputer_id=params[:'user_id']
    role=params[:'user']#sender or recipient of funds
    
    
    #assume intrabank
    if(transaction.intrabank)
      senderIsDisputer=(transaction.account.user.id==disputer_id)
      transaction_recipient_account=Account.where("account_number == ?",transaction.recipient_account_number)
      
      
      transaction.dispute= Dispute.new(
        status: "Dispute Filed",
        disputer_acc_id: senderIsDisputer ? transaction.account.id : transaction_recipient_account.id ,
        dispute_reason: dispute_reasons,
        disputee_id: senderIsDisputer ? transaction.account.user.id : transaction_recipient_account.user.id,
        disputer_id: disputer_id,
        date_time:date_and_time,
        day_date:day_and_date,
        further_action:{ }.to_json,
      
        dispute_reason_details: { 
        "comments" => dispute_comments}.to_json

    )
      
    else
    #assume interbank -> assume disputer is sender
      transaction.dispute= Dispute.new(
        status: "Raised to DBS",
        disputer_acc_id:  transaction.account.id  ,
        dispute_reason: dispute_reasons,
        disputee_id: "",
        disputer_id: disputer_id,
      
        dispute_reason_details: { 
        "comments" => dispute_comments}.to_json

      )
      
    end
    if transaction.save
      data={success: "true"}
      render json: data, status: :ok #http 200
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
