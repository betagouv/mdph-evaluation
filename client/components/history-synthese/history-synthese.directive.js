'use strict';

angular.module('evaluationApp')
  .directive('historySynthese', function() {
    return {
      scope: {
        listSyntheses: '=',
        currentSynthese: '=',
        sectionId: '='
      },
      templateUrl: 'components/history-synthese/history-synthese.html'
    };
  });
