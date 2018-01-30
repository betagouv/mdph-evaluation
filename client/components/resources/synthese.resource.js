'use strict';

angular.module('evaluationApp')
  .factory('SyntheseResource', function($resource) {
    var Synthese = $resource('/api/syntheses/:id', {
      id: '@_id'
    },
    {
      update: {
        method: 'PUT'
      },
      save: {
        method: 'POST'
      },
      query: {
        method:'GET', 
        isArray:true
      },
    });
    return Synthese;
  });
