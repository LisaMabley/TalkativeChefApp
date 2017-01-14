myApp.controller('searchController', ['$http', '$scope',function($http, $scope) {
  $scope.responseReceived = false;

  $scope.recipeList = [];

  $scope.recipeSearchField = '';

  $scope.formattedTags = '';

  var options = {
    host: 'spoonacular-recipe-food-nutrition-v1.p.mashape.com',
    path: '/recipes/random?limitLicense=false&number=20&tags=' + $scope.formattedTags,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'X-Mashape-Key': 'Czdsaz3b8EmshGAOdyDx3GuIQ9VAp1zfhlUjsnPkiqcbwNqMUz'
    }
  }

  function formatTagsForApiCall(inputString) {
    var tagList = inputString.split('');
    for (tag in tagList) {
      $scope.formattedTags += tag + '%2C'
    }
  }

  $scope.sendRequest = function() {
    var tagString = 'chocolate dessert vegan';
    formatTagsForApiCall(tagString);
    var key = 'Czdsaz3b8EmshGAOdyDx3GuIQ9VAp1zfhlUjsnPkiqcbwNqMUz';

    $http.get(options).then(function(response) {
      $scope.recipeList = response.data;
      console.log($scope.recipeList);
    });
  }
}]);
