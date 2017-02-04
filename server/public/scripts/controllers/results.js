myApp.controller('resultsController', ['$http', '$scope', '$window', 'RecipeFactory', function($http, $scope, $window, RecipeFactory) {

$scope.recipeFactory = RecipeFactory;

var id = 630187;

    console.log(id);
    $scope.recipeFactory.setID(id)

    $scope.recipeFactory.getRecipeFactory().then(function(response){
      $scope.steps = $scope.recipeFactory.recipeSteps();
      //console.log($scope.recipeFactory.recipeSteps());

      sendRequest();
  	});
    
function sendRequest () {

    var request = {
     method: 'GET',
     url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+ id +'/information',
     headers: {
       'Content-Type': 'application/json',
       'X-Mashape-Key': 'SQ10bf0CXymshkdJgwkErfFdYGT4p14N1aUjsnHZ8npfsZOeJD'
     }

   };

    $http(request).then(
        function successCallback(response) {
            //console.log('req:',request);
            //console.log('resp:',response);
            $scope.recipeList = response.data;
            //console.log($scope.recipeList.extendedIngredients);
         }, function errorCallback(error){   
          console.log('error');
    });
}

function successCallback(response) {
    $scope.recipeList = response.data.recipes;
    console.log('this is',$scope.recipeList);
    $scope.responseReceived = true;
    $scope.recipeSearchField = '';
    window.recipeList = $scope.recipeList;
  }

function errorCallback(error) {
    if (error) {
      alert('No recipies found' + response);
    }
  }
}]);
