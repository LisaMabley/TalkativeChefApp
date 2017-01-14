myApp.controller('searchController', ['$http', '$scope',function($http, $scope) {
  //var ctrl = this;
  $scope.responseReceived = false;

  $scope.recipeList = [];

  $scope.sendRequest = function() {
    console.log('Nice job clicking, lady!');
  }

  // var options = {
  //   host: 'spoonacular-recipe-food-nutrition-v1.p.mashape.com',
  //   path: '/recipes/random',
  //   method: 'GET',
  //   headers: {
  //       'Content-Type': 'application/json',
  //       'X-Mashape-Key', '<required>'
  //   }
  // };

//?limitLicense=false&number=20&tags=

  // controller.getRecipes = function() {
  //   $http.get('/https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search').then(function(response) {
  //     controller.recipeList = response.data;
  //   });
  // }

}]);
