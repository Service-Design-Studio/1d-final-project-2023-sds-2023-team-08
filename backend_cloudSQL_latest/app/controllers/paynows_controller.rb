class PaynowsController < ApplicationController
  before_action :set_paynow, only: %i[ show edit update destroy ]

=begin
  def search_by_phone
    phone_num=params[:phone]
    paynow_entry=PayNow.where(phone: phone_num).first
    if paynow_entry && paynow_entry.account
      data={success: "true" , acc_num: paynow_entry.account.account_number }
      render json: data, status: :ok 
    else
      data={success: "false" , error: "unable to find paynow with given phone num"}
      render json: data, status: :unprocessable_entity 
    end
  end
=end

  # GET /paynows or /paynows.json
  def index
    @paynows = Paynow.all
  end

  # GET /paynows/1 or /paynows/1.json
  def show
  end

  # GET /paynows/new
  def new
    @paynow = Paynow.new
  end

  # GET /paynows/1/edit
  def edit
  end

  # POST /paynows or /paynows.json
  def create
    @paynow = Paynow.new(paynow_params)

    respond_to do |format|
      if @paynow.save
        format.html { redirect_to paynow_url(@paynow), notice: "Paynow was successfully created." }
        format.json { render :show, status: :created, location: @paynow }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @paynow.errors, status: :unprocessable_entity }
      end
    end
  end

  #'users/:id/paynows/search_by_phone/:phone', to: 'paynows#search_by_phone'
  def search_by_phone

    #1.get current user phone given user id
    #2.go paynow db get acc numbner current user
    #3. go acc db get acc type current user
    #4.go paynow db get other party's acc num and nickname by phone
    
    #paynow db: phone,accnum,bank,nickname, no associations
    
    begin
    current_party=User.find(params[:id].to_s)
    current_phone=current_party.phone #1
    current_accnum=Paynow.get_accnum(current_phone)#2-usraccnum
    current_acctype=Account.where(account_number: current_accnum).first.account_type #3-usraccname
    other_accnum=Paynow.get_accnum(params[:phonenumber])#4- accnum
    other_nickname=Paynow.get_nickname(params[:phonenumber])#nickname
    warning= ! Paynow.paid_before(current_phone,params[:phonenumber])
    data={nickname: other_nickname, accnum: other_accnum, usraccname:current_acctype , usraccnum:current_accnum , warning: warning}
    render json: data, status: :ok
    rescue=> e
      data={error: e.to_s }
    render json: data, status: :unprocessable_entity
    end
    
    
    

   
    
  end

  # PATCH/PUT /paynows/1 or /paynows/1.json
  def update
    respond_to do |format|
      if @paynow.update(paynow_params)
        format.html { redirect_to paynow_url(@paynow), notice: "Paynow was successfully updated." }
        format.json { render :show, status: :ok, location: @paynow }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @paynow.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /paynows/1 or /paynows/1.json
  def destroy
    @paynow.destroy

    respond_to do |format|
      format.html { redirect_to paynows_url, notice: "Paynow was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_paynow
      @paynow = Paynow.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def paynow_params
      params.fetch(:paynow, {})
    end
end
