'use strict';

angular.module('evaluationApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('login', {
        parent: 'layout',
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'loginCtrl',
        data: {
          title: 'Connexion'
        }
      })
      .state('logout', {
        parent: 'layout',
        url: '/logout',
        template: '',
        controller: function($state, Auth) {
          $state.go('login');
          Auth.logout();
        }
      });
  });
