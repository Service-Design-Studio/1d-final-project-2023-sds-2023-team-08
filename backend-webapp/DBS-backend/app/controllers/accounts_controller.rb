
class AccountsController < ApplicationController
  
  before_action :set_account, only: %i[ show edit update destroy all_transactions ]

  def all_transactions
    #outgoing
    outgoing=@account.transactions
    
    #incoming
    incoming=@account.incoming_transactions

    data=self.all_transactions_desc(outgoing,incoming)
    render json: data, status: :ok #http 200

  end

  

  # GET /accounts or /accounts.json
  def index
    @accounts = Account.all
  end

  # GET /accounts/1 or /accounts/1.json
  def show
  end

  # GET /accounts/new
  def new
    @account = Account.new
  end

  # GET /accounts/1/edit
  def edit
  end

  # POST /accounts or /accounts.json
  def create
    @account = Account.new(account_params)

    respond_to do |format|
      if @account.save
        format.html { redirect_to account_url(@account), notice: "Account was successfully created." }
        format.json { render :show, status: :created, location: @account }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @account.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /accounts/1 or /accounts/1.json
  def update
    respond_to do |format|
      if @account.update(account_params)
        format.html { redirect_to account_url(@account), notice: "Account was successfully updated." }
        format.json { render :show, status: :ok, location: @account }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @account.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /accounts/1 or /accounts/1.json
  def destroy
    @account.destroy

    respond_to do |format|
      format.html { redirect_to accounts_url, notice: "Account was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_account
      @account = Account.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def account_params
      params.fetch(:account, {})
    end

    def all_transactions_desc(outgoing,incoming) #latest to earliest, most to least recent
        
  
      combined_sorted=(outgoing.to_a + incoming.to_a).sort_by { |t| (Time.now - t[:datetime].to_time).abs }
  
      data=[]
      
      combined_sorted.each do |transaction|
        outgoing= (transaction.account.user.id==@account.user.id )
        data.push(
          {
            "date":transaction.datetime.strftime("%a, %d %b %Y"),
            "transaction": {
              "transaction name": transaction.generate_transaction_name(outgoing),
              "transaction type": transaction.transaction_type,
              "account number": outgoing ? transaction.account.account_number : transaction.recipient_account_number,
              #if the account which made this transaction belongs to the user, it means outgoing funds thus other party is recipient acc, else sender's acc 
              "total amount": outgoing ? - format('%.2f', transaction.amount) : format('%.2f', transaction.amount)
              #if the account which made this transaction belongs to the user, it means outgoing funds thus -ve, else +ve
            }
  
          }
        )
      end
      return data
  
    end


  
    
   

end
