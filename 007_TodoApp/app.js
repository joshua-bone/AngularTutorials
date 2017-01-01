var app = angular.module('myApp', [])
  .controller('myController', function($scope){
    $scope.newTodoName = '';

    $scope.todos = [
      {task: "Get Milk", done: false},
      {task: "Pay Rent", done: false},
      {task: "Fill up tank", done: false},
      {task: "Call Mom", done: false},
      {task: "Look for apartments", done: false},
      {task: "Apply to job", done: false},
      {task: "Check bank account", done: false},
      {task: "Take ice skating lessons", done: false},
      {task: "Write thesis", done: false},
      {task: "Take car in for repairs", done: false},
      {task: "Buy new clothes", done: false},
      {task: "Do laundry", done: false}
    ];

    $scope.archive = function(){
      var newList = [];
      $scope.todos.forEach(function(t){
        if (!t.done){
          newList.push(t);
        }
      });
      $scope.todos = newList;
    };

    $scope.add = function(){
      if ($scope.newTodoName){
        $scope.todos.push({task: $scope.newTodoName, done: false});
        $scope.newTodoName = '';
      }
    };

    $scope.countRemaining = function(){
      var ct = 0;
      $scope.todos.forEach(function(t){
        if (!t.done){ct++;}
      });
      return ct;
    };
  });
