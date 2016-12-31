var app = angular.module('directivesIII', []);

app.controller('d3controller', function($scope){
  $scope.fname = "George";
  $scope.lname = "Washington";
  $scope.toggleState = 0;
  $scope.toggle = function(){
    $scope.toggleState = ($scope.toggleState + 1) % 3;
  }
});
