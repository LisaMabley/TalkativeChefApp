myApp.controller('searchController', ['$http', '$scope',function($http, $scope) {
  $scope.responseReceived = false;
  $scope.recipeList = [];
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
    var tagString = 'chocolate%2Cdessert%2Cvegan';
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
  };

  function successCallback(response) {
    $scope.recipeList = response.data.recipes;
    console.log(response.data);
    $scope.responseReceived = true;
    console.log($scope.recipeList);
    window.recipeList = $scope.recipeList;
  }



  function errorCallback(error) {
    if (error) {
      alert('No recipies found' + response);
    }
  }
}]);
