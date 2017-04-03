var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider) {
	//set up routes
	$routeProvider
		.when('/', {
			templateUrl: 'views/index.html'
		})
		.when('/about', {
			templateUrl: 'views/about.html'
		})
})