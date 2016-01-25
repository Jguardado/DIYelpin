angular.module('yelpin.factory', [])

.factory('appFactory', ['$http', function($http) {

  var setPost = function(message) {
    //I've got to fix this pathway
    return $http.post('/createPost', message).then(function(response) {
      return response.data;
      console.log(response.data);
    });

  };

  return {
    setPost: setPost,
  };

  var signOut = function() {
    $scope.username = null;
    return $http.get('/signin').then(function(response) {
      return response.data;
    });

  }
}])

.service('sharedPropertyService', [function(value) {
  console.log('going into service');
  var property = 'name';
  console.log('this is the property', property);

  var getProperty = function() {
    return property;
  };

  var setProperty = function(value) {
    property = value;
  };

  return {
    getProperty: getProperty,
    setProperty: setProperty,
  };
}]);
