require_relative '../helpers/application_helper'
class TransactionsController < ApplicationController
  before_action :set_transaction, only: %i[ show edit update destroy ]

  # GET /transactions or /transactions.json
  def index
    @transactions = Transaction.all
  end

  # GET users/:id/transactions/1 or /transactions/1.json
  def show
    user=User.find_by_id(params[:user_id])
    raise "User cannot be nil" if user.nil?
    data=@transaction.transaction_and_dispute_detail(user)
    render json: data, status: :ok #http 200

  end
# get 'users/:id/transaction/:id/details_for_ftd_review', to: 'disputes#details_for_ftd_review
  def details_for_ftd_review
    transaction=Transaction.find(params[:transaction_id])
    if transaction
    data=
    { "total amount": transaction.amount,
      "date":transaction.date_time ,
      "transaction name": transaction.generate_transaction_name,
      "transaction type": transaction.mode_of_payment
    }
    render json: data, status: :ok #http 200
    else
      data={success: "false", error: "error in getting data"}
      render json: data, status: :unprocessable_entity #http 422

    end
    
  end



  # GET /transactions/new
  def new
 

  end

  # GET /transactions/1/edit
  def edit
  end

  # POST /transactions or /transactions.json
  def create
    transaction_params = params.permit(:transfer_from_acc_number, :recipient_acc, :recipient_bank, :total_amount,:comments,:mode_of_payment,:date_and_time,:day_and_date,:transfer_type)
    #transfer_from_acc_number = params[:transfer_from_acc_number]
    
    #recipient_acc = params[:recipient_acc]
    #recipient_bank=params[:recipient_bank] #more for general transactions
    #total_amount = params[:total_amount]
    #comments = params[:comments]
    #mode_of_payment = params[:mode_of_payment]
    #date_and_time = params[:date_and_time]
    #day_and_date = params[:day_and_date]
    #transfer_type = params[:transfer_type]
    transfer_from_acc_number= transaction_params[:transfer_from_acc_number]
    begin
    isRecipientDBS=(transaction_params[:recipient_bank]=='DBS' || transaction_params[:recipient_bank]=='DBS/POSB')
  rescue => e
    puts "An error of type #{e.class} happened, message is #{e.message}"
  end

    sender_acc=Account.where(account_number: transfer_from_acc_number).first
    if sender_acc
      created_transaction=sender_acc.transactions.create(
      transaction_name: transaction_params[:transfer_type], #display
      transaction_type: transaction_params[:mode_of_payment], #internal use
      recipient_account_number: transaction_params[:recipient_acc],
      datetime: DateTime.strptime(transaction_params[:day_and_date], "%a, %d %b %Y"),
      amount: transaction_params[:total_amount],
      comments:transaction_params[:comments],
      date_time: transaction_params[:date_and_time],
      intrabank:isRecipientDBS
    )
    else
      data={success: "false", error: "account not found"}
      render json: data, status: :unprocessable_entity #http 422
      return
    end

  if (created_transaction)
    data={success:true, 
          transactionID: created_transaction.id
        }
    render json: data, status: :ok #http 200

  else
    data={success: "false", error: "transaction not successfully created"}
    render json: data, status: :unprocessable_entity #http 422
  end

  end

  # PATCH/PUT /transactions/1 or /transactions/1.json
  def update
    respond_to do |format|
      if @transaction.update(transaction_params)
        format.html { redirect_to transaction_url(@transaction), notice: "Transaction was successfully updated." }
        format.json { render :show, status: :ok, location: @transaction }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @transaction.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /transactions/1 or /transactions/1.json
  def destroy
    @transaction.destroy

    respond_to do |format|
      format.html { redirect_to transactions_url, notice: "Transaction was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_transaction
      @transaction = Transaction.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def transaction_params
      params.fetch(:transaction, {})
    end
end
