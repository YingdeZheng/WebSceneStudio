'use strict';

// Set up names and dependencies for non-module scripts
requirejs.config({
    baseUrl: '/javascripts',
	paths: {
		'async' : 'async.min',
		'jquery' : 'jquery-ui/js/jquery-1.7.2.min',
		'jquery-ui': 'jquery-ui/js/jquery-ui-1.8.21.custom.min',
		'gl-matrix': 'gl-matrix-min'
	},
	shim: {
		'jquery.debouncedresize' : ['jquery'],
		'jquery-ui' : ['jquery'],
		'gl-matrix-ext' : ['gl-matrix'],
		'loader' : ['base']
	}
});

// TODO: Global scope for runtime debugging, pull declaration into scope below
var app;
// Application entry point
require(['App'], function(App) {
	app = new App(id('canvas'));
	app.Launch();
});