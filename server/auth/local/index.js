'use strict';

import {Router} from 'express';
import passport from 'passport';
import auth from '../auth.service';

var router = new Router();

router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    var error = err || info;
    if (error) return res.status(401).json(error);
    if (!user) return res.status(404).json({message: 'Une erreur est survenue, veuillez réessayer.'});

    var token = auth.signToken(user._id, user.role);
    res.json({token: token, user: user.profile});
  })(req, res, next);
});

module.exports = router;
