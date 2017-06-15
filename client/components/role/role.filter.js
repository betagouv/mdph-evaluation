'use strict';

angular.module('evaluationApp')
  .filter('role', function() {
    return function(input) {
      switch (input) {
        case 'admin':
          return 'Administrateur';
        case 'adminMdph':
          return 'Gestionnaire MDPH';
        case 'user':
          return 'Utilisateur';
        default:
          return '';
      }
    };
  });
