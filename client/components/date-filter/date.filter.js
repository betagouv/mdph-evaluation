'use strict';

angular.module('evaluationApp')
  .filter('momentFromNow', function() {
    return function(input) {
      return moment(input).fromNow();
    };
  })
  .filter('moment', function() {
    return function(input) {
      return moment(input).format('Do MMMM YYYY');
    };
  });
