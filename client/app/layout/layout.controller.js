'use strict';

angular.module('evaluationApp')
  .controller('LayoutCtrl', function($scope, $state, Auth) {
    this.getCurrentUser = Auth.getCurrentUser;
    this.isLoggedIn = Auth.isLoggedIn;
    this.logout = Auth.logout;
  });

