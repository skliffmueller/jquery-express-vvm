/*
	This is an example of using a very basic template engine in the init function (before the html is rendered)
	The html is loaded as a string, then takes the data called via ajax and inserts it into the html string
	After data replacement is done next is called to render the html
*/

define(['jquery'], function($) {
	var id = '';
	var data = {};
	return {
		init:function(html, params, next) {
			id = params.id;
			$.ajax({
				type: "GET",
				url: "/user/"+id
				//data: { name: "John", location: "Boston" }
			})
			.done(function(json) {
				data = json;
				$.each(data, function(index, value) {
					html = html.replace('%'+index+'%', value, 'i');
				})
				next(null, html);
			});
		},
		onLoad:function(element) {
			console.log('html injected via init');
		}
	}
})