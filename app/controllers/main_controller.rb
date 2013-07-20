class MainController < ApplicationController
  def index
  end
  
  def about
  end
  
  def compile
  	engine = Sass::Engine.new(params[:template],
  							  :load_paths => [],
  							  :filesystem_importer => Sass::Importers::Base)
 	css = engine.render
 	render :json => {
 		:result => engine.css
 	}
  end
end
