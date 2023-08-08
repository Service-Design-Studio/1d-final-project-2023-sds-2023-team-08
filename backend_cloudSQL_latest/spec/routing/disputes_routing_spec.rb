require "rails_helper"

RSpec.describe DisputesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/disputes").to route_to("disputes#index")
    end

    it "routes to #new" do
      expect(get: "/disputes/new").to route_to("disputes#new")
    end

    it "routes to #show" do
      expect(get: "/disputes/1").to route_to("disputes#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/disputes/1/edit").to route_to("disputes#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/disputes").to route_to("disputes#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/disputes/1").to route_to("disputes#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/disputes/1").to route_to("disputes#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/disputes/1").to route_to("disputes#destroy", id: "1")
    end
  end
end
