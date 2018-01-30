'use strict';

(function() {

  function AuthService($location, $http, $cookies, $q, Util, UserResource) {
    var safeCb = Util.safeCb;
    var currentUser = {};

    if ($cookies.get('token') && $location.path() !== '/logout') {
      currentUser = UserResource.get();
    }

    var Auth = {

      login({email, password}, callback) {
        return $http.post('/auth/local', {
          email: email,
          password: password
        })
        .then(res => {
          $cookies.put('token', res.data.token);
          currentUser = UserResource.get();
          return currentUser.$promise;
        })
        .then(user => {
          safeCb(callback)(null, user);
          return user;
        })
        .catch(err => {
          Auth.logout();
          safeCb(callback)(err.data);
          return $q.reject(err.data);
        });
      },

      logout() {
        $cookies.remove('token');
        currentUser = {};
      },

      getCurrentUser(callback) {
        if (arguments.length === 0) {
          return currentUser;
        }

        var value = (currentUser.hasOwnProperty('$promise')) ?
          currentUser.$promise : currentUser;
        return $q.when(value)
          .then(user => {
            safeCb(callback)(user);
            return user;
          }, () => {
            safeCb(callback)({});
            return {};
          });
      },

      isLoggedIn(callback) {
        if (arguments.length === 0) {
          return currentUser.hasOwnProperty('email');
        }

        return Auth.getCurrentUser(null)
          .then(user => {
            var is = user.hasOwnProperty('email');
            safeCb(callback)(is);
            return is;
          });
      },

      getToken() {
        return $cookies.get('token');
      }
    };

    return Auth;
  }

  angular.module('evaluationApp.auth').factory('Auth', AuthService);

})();
