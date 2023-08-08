require 'rails_helper'

RSpec.describe "disputes/index", type: :view do
  before(:each) do
    assign(:disputes, [
      Dispute.create!(),
      Dispute.create!()
    ])
  end

  it "renders a list of disputes" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
  end
end
