'use strict';

import {Router} from 'express';
import * as controller from './profile.controller';
import Profile from './profile.model';
import { canAccessProfileList, canAccessProfile } from '../../auth/auth.service';

var router = new Router({mergeParams: true});

router.get('/', canAccessProfileList(), controller.index);
router.post('/', canAccessProfileList(), controller.create);
router.get('/me', canAccessProfileList(), controller.showMe);
router.get('/count', canAccessProfileList(), controller.profileCount);
router.get('/:profileId', canAccessProfile(), controller.show);

router.post('/:profileId', canAccessProfile(), controller.update);
router.delete('/:profileId', canAccessProfile(), controller.destroy);

router.param('profileId', function(req, res, next, profileId) {
  Profile
    .findById(profileId)
    .exec(function(err, profile) {
      if (err) return next(err);
      if (!profile) return res.sendStatus(404);

      req.profile = profile;
      next();
    });
});

module.exports = router;
