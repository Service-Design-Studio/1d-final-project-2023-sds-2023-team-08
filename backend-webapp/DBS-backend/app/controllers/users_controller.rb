
class UsersController < ApplicationController
  
  before_action :set_user, only: %i[ show edit update destroy list_accounts total_deposit all_transactions]

  def total_deposit
    total_deposits_all_accounts=@user.total_deposits
    data = {
      "deposit": total_deposits_all_accounts
    }
  
    render json: data, status: :ok #http 200
  end
  def list_accounts

    accounts=[]
    account_ids=[]
    @user.accounts.each do |account|
      accounts.push(account.account_number)
      account_ids.push(account.id)
    end

    data = {
      "account_numbers": accounts,
      "account_IDs": account_ids  #required for future get request in button callbacks

    }
  
    render json: data, status: :ok #http 200
  end


  def all_transactions
    #outgoing
    outgoing=@user.transactions
    
    #incoming
    incoming=@user.incoming_transactions

    data=self.all_transactions_desc(outgoing,incoming)
    render json: data, status: :ok #http 200


  end


  # GET /users or /users.json
  def index
    @users = User.all
  end

  # GET /users/1 or /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users or /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.html { redirect_to user_url(@user), notice: "User was successfully created." }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1 or /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to user_url(@user), notice: "User was successfully updated." }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1 or /users/1.json
  def destroy
    @user.destroy

    respond_to do |format|
      format.html { redirect_to users_url, notice: "User was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.fetch(:user, {})
    end

    
  def all_transactions_desc(outgoing,incoming) #latest to earliest
        
  
    combined_sorted=(outgoing.to_a + incoming.to_a).sort_by(&:datetime).reverse #latest to earliest

    data=[]
    combined_sorted.each do |transaction|
      data.push(
        {
          "date":transaction.datetime.strftime("%a, %d %b %Y"),
          "transaction": {
            "transaction name": transaction.transaction_name,
            "transaction type": transaction.transaction_type,
            "account number": transaction.account.user.id==@user.id ? transaction.recipient_account_number : transaction.account,
            #if the account which made this transaction belongs to the user, it means outgoing funds thus other party is recipient acc, else sender's acc 
            "total amount": transaction.account.user.id==@user.id ? -transaction.amount : transaction.amount
            #if the account which made this transaction belongs to the user, it means outgoing funds thus -ve, else +ve
          }

        }
      )
    end
    return data

  end

end
