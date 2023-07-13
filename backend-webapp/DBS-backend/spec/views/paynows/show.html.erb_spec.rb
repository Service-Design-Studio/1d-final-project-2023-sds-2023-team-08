require 'rails_helper'

RSpec.describe "paynows/show", type: :view do
  before(:each) do
    assign(:paynow, Paynow.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
