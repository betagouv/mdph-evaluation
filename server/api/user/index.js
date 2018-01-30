'use strict';

import {Router} from 'express';
import * as controller from './user.controller';
import auth from '../../auth/auth.service';

var router = new Router();

router.get('/me', auth.isAuthenticated(), controller.me);

module.exports = router;
