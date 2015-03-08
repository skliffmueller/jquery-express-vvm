/*
	This is an example of calling json data via ajax, then loading the data after the html has been rendered using jQuery selectors
*/

define(['jquery'], function($) {
	var data = [];
	return {
		init:function(html, params, next) {
			$.ajax({
				type: "GET",
				url: "/users"
				//data: { name: "John", location: "Boston" }
			})
			.done(function(json) {
				data = json;
				next(null, html);
			});
		},
		onLoad:function(element) {
			console.log(data);
			var html = "";
			for(var i=0;i<data.length;i++) {
				html += "<tr><td>"+data[i].id+"</td><td>"+data[i].name+"</td><td><a href='#/user/"+data[i].id+"'>View</a></td></tr>"
			}
			$('#data').html(html); // data being added via jquery
		}
	}
})