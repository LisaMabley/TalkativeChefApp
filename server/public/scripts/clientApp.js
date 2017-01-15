
var myApp = angular.module('myApp', ['ng-route']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/index', {
		  templateUrl: '/public/views/index.html',
		  controller: 'searchController'
		})
		.when('/results', {
		  templateUrl: '/public/views/recipe.html',
		  controller: 'searchController'
		})
		.otherwise({
		  redirectTo: "/index"
		});
}]);	

console.log('this works');
