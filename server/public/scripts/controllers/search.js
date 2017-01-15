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
     url: '/spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=20&tags=' + tagString,
     headers: {
       'Content-Type': 'application/json',
       'X-Mashape-Key': 'Czdsaz3b8EmshGAOdyDx3GuIQ9VAp1zfhlUjsnPkiqcbwNqMUz'
     }
   };

    $http(request).then(successCallback, errorCallback);
  }

  function successCallback() {
    $scope.recipeList = response.data;
    $scope.responseReceived = true;
    console.log($scope.recipeList);
  }

  function errorCallback(response) {
    alert('No recipies found' + response);
  }
}]);
