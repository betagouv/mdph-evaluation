'use strict';

import config from '../config/environment';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import compose from 'composable-middleware';

import User from '../api/user/user.model';

var validateJwt = expressJwt({ secret: config.secrets.session });

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 401
 */
function isAuthenticated() {
  return compose()

    // Validate jwt
    .use(function(req, res, next) {
      // allow access_token to be passed through query parameter as well
      if (req.query && req.query.hasOwnProperty('access_token')) {
        req.headers.authorization = 'Bearer ' + req.query.access_token;
      }

      validateJwt(req, res, next);
    })

    // Attach user to request
    .use(function(req, res, next) {
      User
        .findById(req.user._id)
        .populate('mdph')
        .exec(function(err, user) {
          if (err) {
            return next(err);
          }

          if (!user) {
            return res.sendStatus(401);
          }

          req.user = user;
          next();
        });
    });
}

function signToken(id) {
  return jwt.sign({ _id: id}, config.secrets.session, { expiresIn: 60 * 60 * 24 });
}

exports.isAuthenticated = isAuthenticated;
exports.signToken = signToken;