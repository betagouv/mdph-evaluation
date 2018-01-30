import {Router} from 'express';
import * as controller from './issue.controller';
import auth from '../../auth/auth.service';

var router = new Router();

router.get('/:section', auth.isAuthenticated(), controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.toggle);

module.exports = router;
