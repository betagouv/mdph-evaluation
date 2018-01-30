'use strict';

(function() {

  function UtilService($window) {
    var Util = {

      safeCb(cb) {
        return (angular.isFunction(cb)) ? cb : angular.noop;
      },

      urlParse(url) {
        var a = document.createElement('a');
        a.href = url;

        // Special treatment for IE, see http://stackoverflow.com/a/13405933 for details
        if (a.host === '') {
          a.href = a.href;
        }

        return a;
      },

      isSameOrigin(url, origins) {
        url = Util.urlParse(url);
        origins = (origins && [].concat(origins)) || [];
        origins = origins.map(Util.urlParse);
        origins.push($window.location);
        origins = origins.filter(function(o) {
          return url.hostname === o.hostname &&
            url.protocol === o.protocol;
        });

        return (origins.length >= 1);
      }
    };

    return Util;
  }

  angular.module('evaluationApp.util')
    .factory('Util', UtilService);

})();
