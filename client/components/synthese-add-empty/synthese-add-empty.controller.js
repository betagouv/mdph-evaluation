'use strict';

angular.module('evaluationApp').controller('syntheseAddEmptyCtrl', function(SyntheseResource, $state) {

  this.addNewSynthese = () => {

        // Désormais la création est fait lors de la saisie d'au moins un champ

        $state.go('detail', {sectionId: 'profil'});

      };
});
