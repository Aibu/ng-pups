var pups = angular.module('NgPups', ['ui.router']);

pups.run(function ($http, $rootScope) {

  $http.get('/data/puppies')
      .then(function (response) {
          $rootScope.puppies = response.data;
      });

});