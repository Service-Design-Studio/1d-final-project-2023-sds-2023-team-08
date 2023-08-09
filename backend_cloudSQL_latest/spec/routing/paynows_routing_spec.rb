require "rails_helper"

RSpec.describe PaynowsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/paynows").to route_to("paynows#index")
    end

    it "routes to #new" do
      expect(get: "/paynows/new").to route_to("paynows#new")
    end

    it "routes to #show" do
      expect(get: "/paynows/1").to route_to("paynows#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/paynows/1/edit").to route_to("paynows#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/paynows").to route_to("paynows#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/paynows/1").to route_to("paynows#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/paynows/1").to route_to("paynows#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/paynows/1").to route_to("paynows#destroy", id: "1")
    end
  end
end
