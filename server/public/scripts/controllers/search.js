myApp.controller('searchController', ['$http', '$scope', '$location', function($http, $scope, $location) {
  $scope.responseReceived = false;
  $scope.recipeList = [];
  $scope.recipe = [];
  $scope.recipeSearchField = '';
  $scope.formattedTags = '';

  // function formatTagsForApiCall(inputString) {
  //   var tagList = inputString.split('');
  //   if (tagList.length > 1) {
  //     for (tag in tagList) {
  //       $scope.formattedTags += tag + '%2C'
  //     }
  //   } else {
  //     $scope.formattedTags = inputString;
  //   }
  // }

  $scope.sendRequest = function() {
    var tagString = $scope.recipeSearchField;
    //formatTagsForApiCall(tagString);

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

  $scope.getRecipe = function(id) {
    var recipeId = id;
    console.log(recipeId);

    var request = {
     method: 'GET',
     url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + recipeId + '/information',
     headers: {
       'Content-Type': 'application/json',
       'X-Mashape-Key': 'Czdsaz3b8EmshGAOdyDx3GuIQ9VAp1zfhlUjsnPkiqcbwNqMUz'
     }
   };
   console.log(request);
    $http(request).then(successCallbackRecipe, errorCallback);

  };


  function successCallback(response) {
    $scope.recipeList = response.data.recipes;
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

  function successCallbackRecipe(response) {
    $scope.recipe = response.data
    $location.path('/recipe')
    console.log($scope.recipe)
  }


}]);
