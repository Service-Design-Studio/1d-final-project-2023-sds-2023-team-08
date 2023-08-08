# app/controllers/csrf_controller.rb
class CsrfController < ApplicationController
    def fetch_csrf_token
      render json: { csrfToken: form_authenticity_token }
    end
  end