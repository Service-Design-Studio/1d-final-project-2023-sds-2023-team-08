require 'rails_helper'

RSpec.describe "paynows/index", type: :view do
  before(:each) do
    assign(:paynows, [
      Paynow.create!(),
      Paynow.create!()
    ])
  end

  it "renders a list of paynows" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
  end
end
