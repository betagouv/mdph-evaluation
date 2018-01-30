'use strict';

angular.module('evaluationApp').component('syntheseAddEmpty', {
  templateUrl: 'components/synthese-add-empty/synthese-add-empty.html',
  controller: 'syntheseAddEmptyCtrl',
  controllerAs: 'syntheseAddEmptyCtrl',
  bindings: {
    mdph: '<'
  }
});
