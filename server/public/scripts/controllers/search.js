myApp.controller('searchController', ['$http', '$scope', '$window', 'RecipeFactory', function($http, $scope, $window, RecipeFactory) {
  $scope.responseReceived = false;
  $scope.recipeList = [{title: "vegan oatmeal cookies", image: 'https://spoonacular.com/recipeImages/vegan-oatmeal-cookies--fruit-sweetened-(gluten-free-option)-630187.jpg'}];
  $scope.recipeSearchField = '';
  $scope.hideShowTutorial = false;


  $scope.recipeFactory = RecipeFactory;

  $scope.sendRequest = function(recipeSearchField) {
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
    $scope.recipeFactory.setID(id);
    //console.log($scope.recipeFactory.setID());

    //console.log($scope.recipeFactory.setID(id));
    //console.log($scope.recipeFactory.getRecipeFactory());
    $scope.recipeFactory.getRecipeFactory().then(function(repsonse){
      $scope.steps = $scope.recipeFactory.recipeSteps();
      console.log($scope.recipeFactory.recipeSteps());
      $window.location.href = '/public/views/recipe.html?id='+id

    });

  }

  $scope.toggleTutorial = function(){
    if ($scope.hideShowTutorial == false){
      $scope.hideShowTutorial = true;
    } else {
      $scope.hideShowTutorial = false;
    }
    console.log($scope.hideShowTutorial);
  }

  function successCallback(response) {
    $scope.recipeList = $scope.recipeList.concat(response.data.recipes);
    $scope.responseReceived = true;
    $scope.recipeSearchField = '';
    window.recipeList = $scope.recipeList;
  }

  function errorCallback(error) {
    if (error) {
      alert('No recipies found' + error);
    }
  }

}]);
