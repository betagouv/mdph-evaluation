'use strict';

angular.module('evaluationApp').component('trajectoire', {
  templateUrl: 'components/trajectoire/trajectoire.html',
  bindings: {
    sublevel: '=',
    questions: '=',
    deficienceQuestionId: '=',
    root: '=',
    readOnly: '=',
    newIssue: '='
  },
  controller: 'TrajectoireController',
  controllerAs: 'trjctrCtrl'
});
