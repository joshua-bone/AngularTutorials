var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){
  $scope.fname = "Zsa Zsa";
  $scope.lname = "Gabor";
  $scope.fullName = function(){
    return $scope.fname + ' ' + $scope.lname;
  };
  $scope.reverseName = function(){
    var fwd = $scope.fullName();
    var rev = ''
    for (var i = fwd.length - 1; i >= 0; i--){
      rev += fwd[i];
    };
    return rev;
  };
  $scope.randomName = function(){
    var fullname = $scope.fullName();
    var rname = '';
    while (fullname.length > 0){
      var index = Math.floor(Math.random() * fullname.length);
      rname += fullname[index];
      fullname = fullname.slice(0, index) + fullname.slice(index + 1, fullname.length);
    }
    return rname;
  };
});
