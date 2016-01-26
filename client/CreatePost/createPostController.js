angular.module('yelpin.createPost', [])

.controller('createPostController', ['$scope', 'appFactory', 'sharedPropertyService', '$state', function($scope, appFactory, sharedPropertyService, $state) {
  //the above module will require: ngfileUpload, this controller will also require: Upload, and $timeout.
  //BELOW: captures the input values from the descritpion and text imput box.

  $scope.descript = '';
  $scope.txtcomment = '';
  $scope.category = '';

  //using a function created in factory that stores the value of the username.
  var temp = sharedPropertyService.getProperty();
  console.log('this is the set property', temp);

  $scope.username = temp;

  //this might not even be needed.
  $scope.comment = [];

  //User authenticating uses the property in our factory and a check. If the property hasnt been changed then it will send you back to signin.
  $scope.checkAuth = function() {
    var check = sharedPropertyService.getProperty();
    console.log('check auth', check);
    if (check === 'name') {
      $state.go('signin');
    }
  };

  //takes the values passed in and converts it in a data object being to be passed to our server
  $scope.postToPage = function() {
    console.log('this inside of post', $scope.username);
    if ($scope.txtcomment != '') {
      console.log($scope.txtcomment);
      console.log($scope.descript);
      //this might not be needed
      $scope.comment.push($scope.txtcomment);
    }

    var data = { username: $scope.username, title: $scope.descript, message: $scope.txtcomment, category: $scope.category };
    console.log(data);
    //uses the factory
    appFactory.setPost(data);
    //resets the values to blank
    $scope.txtcomment = '';
    $scope.descript = '';
    $scope.category = '';
  };

  //This appears to retrieve the photo. But I cant find a way to then store this image in my mongo DB or whether it is being posted to an external server.

  // $scope.uploadFiles = function(file, errFiles) {
  //   $scope.f = file;
  //   $scope.errFile = errFiles && errFiles[0];
  //   if (file) {
  //     file.upload = Upload.upload({
  //       url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
  //       data: { file: file },
  //     });
  //     console.log(file.upload);
  //     file.upload.then(function(response) {
  //       $timeout(function() {
  //         file.result = response.data;
  //       });
  //     },
  //
  //     function(response) {
  //       if (response.status > 0)
  //         $scope.errorMsg = response.status + ': ' + response.data;
  //     },
  //
  //     function(evt) {
  //       file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
  //     });
  //   }
  // };
  $scope.checkAuth();
}]);
