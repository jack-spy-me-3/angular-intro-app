/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
    $scope.purpleHippo = "Hello World";

    window.$scope = $scope;
  });
})();