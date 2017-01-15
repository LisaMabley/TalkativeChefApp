myApp.controller('resultsController', ['$http', '$scope', '$window', 'RecipeFactory', function($http, $scope, $window, RecipeFactory) {

$scope.recipeFactory = RecipeFactory;

var id = window.location.href.slice(50);



    console.log(id);
    $scope.recipeFactory.setID(id)

    $scope.recipeFactory.getRecipeFactory().then(function(repsonse){
      $scope.steps = $scope.recipeFactory.recipeSteps();
      console.log($scope.recipeFactory.recipeSteps());
  	});



}]);
