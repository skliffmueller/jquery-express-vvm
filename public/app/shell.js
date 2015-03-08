define(['jquery', 'bootstrap', 'require'], function($, bootstrap, require) {
	var body = false;

	/*
		Routes
		Very basic syntax, only supports /path/:param
		view is the path relative to the view/viewmodel pair
		Loaded into #template element
	*/
	var routes = [{
		path:'/index',
		view:'index'
	},{
		path:'/user/:id',
		view:'user'
	}];
	return {
		/*
			Load before rendering HTML
			This is a point in time to make modifications to the html of shell before jQuery.append(html) is applied
			This would be a good point to make AJAX queries, save the parameters, etc
		*/
		init: function(html, params, next) {
			next(null, html);
		},
		/*
			Loads after rendering HTML
			This would be a good point to make click bindings, initiate elements and plugins, refresh bootstrap

		*/
		onLoad: function(element) {
			body = element;

			/* Basic click binding on shell */
			obj = body.children('#modify');
			obj.click(function() {
				$(this).html('has been clicked');
			});
			/* End click bind */

			/* on hash change update #template element with view in route */
		    $(window).on('hashchange', function(){
		    	console.log('hashchange');
		    	var request = window.location.hash.substr(1).split('/');
		    	var params = {};
		    	var template = '';
		    	for(var i=0;i<routes.length;i++) {
		    		var match = routes[i].path.split('/');
		    		if(match.length==request.length) {
			    		for(var j=0;j<=match.length;j++) {
			    			if(match.length==j) {
			    				template = routes[i].view;
			    				break;
			    			}
			    			if(match[j].charAt(0)==':') {
			    				params[match[j].substr(1)] = request[j];
			    			} else if(match[j]!=request[j]) {
			    				console.log('break');
			    				console.log(match[j], request[j]);
			    				break;
			    			}
			    		}
		    		}
		    		if(template!='') {
		    			break;
		    		}
		    	}
		    	if(template=='') {
		    		template='index';
		    	}
		    	if(template!='') {
					require(['text!views/'+template+'.html','viewmodels/'+template], function(html, js) {
						js.init(html, params, function(err, render) {
							if(err) {
								console.log('ERROR: ', err);
								return;
							}
							js.onLoad(body.children('#template').html(render));
						})
					});
				} else {
					console.log('No route found');
				}
		    });
			/* End route template render */

			// Trigger event on first load
			$(window).trigger('hashchange');
		}
	}
});