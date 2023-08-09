require 'rails_helper'

RSpec.describe "disputes/edit", type: :view do
  let(:dispute) {
    Dispute.create!()
  }

  before(:each) do
    assign(:dispute, dispute)
  end

  it "renders the edit dispute form" do
    render

    assert_select "form[action=?][method=?]", dispute_path(dispute), "post" do
    end
  end
end
