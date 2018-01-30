'use strict';

angular.module('evaluationApp')
  .component('navSteps', {
    templateUrl: 'components/nav-steps/nav-steps.html',
    bindings: {
      nextStep: '<',
      prevStep: '<',
      questionForm: '<',
      isFirstQuestion: '<',
      isLastQuestion: '<'
    },
    controllerAs: 'navstepsctrl',
    controller: function() {
      this.check = (form) => {
        if (form.$invalid) {
          form.showError = true;
        } else {
          this.nextStep();
        }
      };
    }
  });
