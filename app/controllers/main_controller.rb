class MainController < ApplicationController
  def index
  end
  
  def about
  end
  
  def compile
  	begin
	  	engine = Sass::Engine.new(params[:input] || "",
	  							  :load_paths => [],
	  							  :syntax => params[:syntax].to_sym || :scss,
	  							  :filesystem_importer => Sass::Importers::Base)
	 	css = engine.render
	 	render :json => {
	 		:result => css,
	 		:status => "success"
	 	}
	rescue Sass::SyntaxError => e
		render :json => {
			:result => e.to_s,
			:status => "error"
		}
	end
  end
end
