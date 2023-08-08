require 'rails_helper'

RSpec.describe "disputes/new", type: :view do
  before(:each) do
    assign(:dispute, Dispute.new())
  end

  it "renders new dispute form" do
    render

    assert_select "form[action=?][method=?]", disputes_path, "post" do
    end
  end
end
