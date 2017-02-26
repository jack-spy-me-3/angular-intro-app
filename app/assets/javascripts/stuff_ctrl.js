/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
    $scope.tasks = [
                    {text: "Go on a diet", assignee: "James"},
                    {text: "Bring the coffee", assignee: "Jonathan"},
                    {text: "Help the students", assignee: "Andy"}
                   ];

    $scope.addTodo = function(todo, inputAssignee) {
      if (todo) {
        $scope.tasks.push({text: todo,
                      assignee: inputAssignee});
        $scope.newTodo = null;
      }
    };

    $scope.removeTask = function(index) {
      $scope.tasks.splice(index, 1);
    };

    $scope.isNotFood = function(task) {
      return task.indexOf("food") === -1;
    };
    window.$scope = $scope;
  });
})();