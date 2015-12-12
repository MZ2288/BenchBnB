class Api::BenchesController < ApplicationController
  def create
  end

  def index
    @benches = Bench.all
    render :index 
  end

  private
  def bench_params
    params.require(:bench).permit(:lng, :lat)
  end
end
