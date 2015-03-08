require.config({
    waitSeconds: 0,
    paths: {
        'require': '../../lib/require',
        'jquery': '../../lib/jquery.min',
        'bootstrap': '../../lib/bootstrap.min',
        'text':'../../lib/text'
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"],
            exports: "$.fn.popover"
        }
    }
});

/* Start the Shell */
require(['text!shell.html','./shell'], function(html, js) {
	js.init(html, { /* Save for later */ }, function(err, render) {
		if(err) {
			console.log('ERROR: ', err);
			return;
		}
		var body = $('body').html(render);
		js.onLoad(body);
	})
});