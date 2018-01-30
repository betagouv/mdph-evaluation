'use strict';

angular.module('evaluationApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('detail', {
        url: '/:syntheseId/:sectionId',
        parent: 'layout',
        authenticate: true,
        views: {
          '': {
            templateUrl: 'app/detail/detail.html',
            controller: 'DetailCtrl',
            controllerAs: 'detailCtrl',
            resolve: {
              currentUser : function(UserResource) {
                return UserResource.get();
              },

              sections: function(GevaService) {
                return GevaService.getSections();
              },

              model: function(GevaService) {
                return GevaService.getModel();
              },

              syntheseId: function($stateParams) {
                return $stateParams.syntheseId;
              },

              sectionId: function($stateParams) {
                return $stateParams.sectionId;
              },

              currentSynthese: function(SyntheseResource, syntheseId) {
                if (syntheseId) {
                  return SyntheseResource.get({id: syntheseId}).$promise;
                } else {
                  return {};
                }
              },

              section: function($stateParams, sections, model, sectionId) {
                var section = _.find(sections, {id: sectionId});

                return {
                  id: section.id,
                  label: section.label,
                  trajectoires: model[section.libelle]
                };
              }
            }
          },
          'issues@detail': {
            templateUrl: 'app/issues/issues.html',
            controllerAs: 'issuesCtrl',
            controller: function($http, $stateParams) {
              this.loading = true;
              this.toggle = (issue) => {
                $http
                  .put(`api/issues/${issue._id}`)
                  .then(result => {
                    issue.closed = result.data.closed;
                  });
              };

              $http
                .get(`api/issues/${$stateParams.sectionId}`)
                .then(result => {
                  this.issues = result.data;
                  this.loading = false;
                })
                .catch(() => {
                  this.loading = false;
                });
            }
          }
        }
      });
  });
