
class UsersController < ApplicationController
  
  before_action :set_user, only: %i[ show edit update destroy default_acc list_accounts total_deposit all_transactions home]

  
  def home
    

    data = {
      "user": @user.username,
      "account": @user.list_of_acc_infos
      

    }
  
    render json: data, status: :ok #http 200
  end




    # POST /login
  def login
    
    
    begin
      user_params = params.require([:username, :pin])
      
    rescue ActionController::ParameterMissing => e
      render json: { success: false, error: e.message }, status: :unprocessable_entity
      return
    end  
    
    user=User.where(username: user_params[0], password: user_params[1]).first
    
    if user
      
      render json: { success: true, userid:user.id }, status: :ok
    else
      
      render json: { success: false, error: "no user found" }, status: :unprocessable_entity #http 422 
    end

  end

  # GET 'users/:id/default_acc'
  def default_acc
    default_acc=@user.accounts.first
    if default_acc
      data={
        default_acc_name:default_acc.account_type,
        default_acc_number:default_acc.account_number
      }
      render json: data, status: :ok #http 200
    else
      data={
        success:false,
        error:"no account exist"
      }
      render json: data, status: :unprocessable_entity 
    end

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
    rescue ActiveRecord::RecordNotFound
      raise ActionController::RoutingError, 'User Not Found'
      #render json: { error: "user not found" }, status: :not_found  #404 Not Found
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.fetch(:user, {})
    end

    




end
