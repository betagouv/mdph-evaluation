'use strict';

angular.module('evaluationApp')
  .controller('LoginCtrl', function($rootScope, $scope, Auth, $location, $state) {
    $scope.user = {};
    $scope.error = null;

    $scope.login = function(form) {
      if (form.$valid) {
        Auth.login({
          email: form.email.$modelValue,
          password: form.password.$modelValue
        })
        .then(function(user) {
          if (!user.mdph) {
            user.mdph = {zipcode: 'test'};
          }

          return $state.go('dashboard', {currentUser: user}, {reload: true});
        })
        .catch(function(err) {
          $scope.error = err.message;
          return $state.go('login');
        });
      }
    };
  });
