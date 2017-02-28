/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
    $scope.tasks = [
                    {text: "Go on a diet", completed: false},
                    {text: "Bring the coffee", completed: false},
                    {text: "Help the students", completed: false}
                   ];

    $scope.addTodo = function(todo) {
      if (todo) {
        $scope.tasks.push({text: todo});
        $scope.newTodo = null;
      }
    };

    $scope.removeTask = function(index) {
      $scope.tasks.splice(index, 1);
    };

    $scope.markComplete = function(task) {
      task.completed = true;
    };

    $scope.counter = function() {
      var count = 0;
      for (var i = 0; i < $scope.tasks.length; i++) {
        if (!$scope.tasks[i].completed) {
          count++;
        }
      }
      return count;
    };

    $scope.isNotFood = function(task) {
      return task.indexOf("food") === -1;
    };

    $scope.removeCompletedTasks = function() {
      var completedTasks = [];

      for (var i = 0; i < $scope.tasks.length; i++) {
        if ($scope.tasks[i].completed) {
          completedTasks.push($scope.tasks[i]);
        }
      }

      for (var j = 0; j < completedTasks.length; j++) {
        $scope.tasks.splice($scope.tasks.indexOf(completedTasks[j]), 1);
      }
    };
    window.$scope = $scope;
  });
})();