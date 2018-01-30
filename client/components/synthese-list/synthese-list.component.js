'use strict';

angular.module('evaluationApp').component('syntheseList', {
  templateUrl: 'components/synthese-list/synthese-list.html',
  controller: 'syntheseListCtrl',
  controllerAs: 'syntheseListCtrl',
  bindings: {
    mdph: '<'
  }
});
