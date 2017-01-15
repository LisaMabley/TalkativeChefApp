myApp.controller('searchController', ['$http', '$scope', '$window', 'RecipeFactory', function($http, $scope, $window, RecipeFactory) {
  $scope.responseReceived = false;
  $scope.recipeList = [];
  $scope.recipeSearchField = '';
  $scope.recipeFactory = RecipeFactory;

  $scope.sendRequest = function() {
    var tagString = $scope.recipeSearchField;

    var request = {
     method: 'GET',
     url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=20&tags=' + tagString,
     headers: {
       'Content-Type': 'application/json',
       'X-Mashape-Key': 'Czdsaz3b8EmshGAOdyDx3GuIQ9VAp1zfhlUjsnPkiqcbwNqMUz'
     }
   };

    $http(request).then(successCallback, errorCallback);
  }

  $scope.getRecipe = function(recipeId){
    var id = recipeId;

    console.log(id);
    $scope.recipeFactory.setID(id)
    //console.log($scope.recipeFactory.setID());

    //console.log($scope.recipeFactory.setID(id));
    //console.log($scope.recipeFactory.getRecipeFactory());
    $scope.recipeFactory.getRecipeFactory().then(function(repsonse){
      $scope.steps = $scope.recipeFactory.recipeSteps();
      console.log($scope.recipeFactory.recipeSteps());
      $window.location.href = '/public/views/recipe.html?id='+id

    });

  }
  // $scope.getRecipe = function(id) {
  //   var recipeId = id;
  //   console.log(recipeId);

  //   var request = {
  //    method: 'GET',
  //    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + recipeId + '/analyzedInstructions',
  //    headers: {
  //      'Content-Type': 'application/json',
  //      'X-Mashape-Key': 'Czdsaz3b8EmshGAOdyDx3GuIQ9VAp1zfhlUjsnPkiqcbwNqMUz'
  //    }
  //  };
  //  console.log(request);
  //   $http(request).then(successCallbackRecipe, errorCallback);

  // };

  function successCallback(response) {
    $scope.recipeList = response.data.recipes;
    console.log(response.data);
    $scope.responseReceived = true;
    console.log($scope.recipeList);
    $scope.recipeSearchField = '';
    window.recipeList = $scope.recipeList;

  }

  function errorCallback(error) {
    if (error) {
      alert('No recipies found' + response);
    }
  }

  // function successCallbackRecipe(response) {
  //   var data = response.data
  //   $scope.steps = data[0].steps
  //   //$window.location.href = '/public/views/recipe.html'
  //   console.log('recipe:',$scope.steps);
  // }

}]);
