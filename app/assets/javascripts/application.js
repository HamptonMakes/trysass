// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require codemirror
//= require_tree .


$(document).foundation();

var sassMirror;
var cssMirror;

$(function() {
	sassMirror = CodeMirror.fromTextArea($("textarea.scss")[0], {
					mode: "text/x-scss", 
					theme: "twilight", 
					autofocus: true,
				    onKeyEvent: function(mirror, event) {
				    	mirror.save()
				    	$.ajax("/compile", {
				    		data: {
				    			input: $("textarea.scss")[0].value
				    		},
				    		dataType: "json",
				    		success: function(data, textStatus, bs) {
				    			cssMirror.setValue(data.result)
				    		}

				    	})
				    }});
	cssMirror = CodeMirror.fromTextArea($("textarea.css")[0], {mode: "css", theme: "twilight", readOnly: true});
})
