'use strict';

angular.module('evaluationApp.auth', [
  'evaluationApp.constants',
  'evaluationApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
