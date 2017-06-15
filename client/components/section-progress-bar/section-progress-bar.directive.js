'use strict';

angular.module('evaluationApp')
  .directive('sectionProgressBar', function() {
    return {
      scope: {
        completion: '='
      },
      templateUrl: 'components/section-progress-bar/section-progress-bar.html',
      restrict: 'E'
    };
  });
