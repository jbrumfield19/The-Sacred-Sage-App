class ResultsController < ApplicationController

    def index
        render json: Result.all
    end

    def update
        result = Result.find(params[:id]) 
    end

    def result_params
        params.permit( :category, :user_id, :product_bundle_id)
    end
end
