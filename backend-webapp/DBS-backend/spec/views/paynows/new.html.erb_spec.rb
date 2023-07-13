require 'rails_helper'

RSpec.describe "paynows/new", type: :view do
  before(:each) do
    assign(:paynow, Paynow.new())
  end

  it "renders new paynow form" do
    render

    assert_select "form[action=?][method=?]", paynows_path, "post" do
    end
  end
end
