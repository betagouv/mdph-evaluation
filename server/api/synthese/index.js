'use strict';

import {Router} from 'express';
import * as controller from './synthese.controller';
import Synthese from './synthese.model';
import Mdph from '../mdph/mdph.model';
import auth from '../../auth/auth.service';

var router = new Router();

router.post('/', auth.isAuthenticated(), controller.create);
router.get('/', auth.isAuthenticated(), controller.showAllByMdph);
router.get('/:syntheseId/pdf', auth.isAuthenticated(), controller.getPdf);
router.get('/:syntheseId', auth.isAuthenticated(), controller.show);
router.put('/:syntheseId', auth.isAuthenticated(), controller.update);

router.param('syntheseId', function(req, res, next, syntheseId) {
  Synthese
    .findById(syntheseId)
    .exec(function(err, synthese) {
      if (err) {
        return next(err);
      }

      if (!synthese) return res.sendStatus(404);

      Mdph
        .findById(synthese.mdph)
        .exec()
        .then(mdph => {
          req.mdph = mdph;
          req.synthese = synthese;
          next();
        });
    });
});

module.exports = router;
