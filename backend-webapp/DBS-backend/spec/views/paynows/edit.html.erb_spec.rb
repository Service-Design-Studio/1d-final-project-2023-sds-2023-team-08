require 'rails_helper'

RSpec.describe "paynows/edit", type: :view do
  let(:paynow) {
    Paynow.create!()
  }

  before(:each) do
    assign(:paynow, paynow)
  end

  it "renders the edit paynow form" do
    render

    assert_select "form[action=?][method=?]", paynow_path(paynow), "post" do
    end
  end
end
