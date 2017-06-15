'use strict';

import Profile from './profile.model';

export function index(req, res) {
  Profile
    .find({user: req.params.userId})
    .sort('createdAt')
    .populate('user', 'profile')
    .exec()
    .then(respondWithResult(res))
    .catch(handleError(req, res));
}

export function show(req, res) {
  return res.json(req.profile);
}

export function showMe(req, res) {
  Profile
    .findOne({user: req.user._id})
    .exec()
    .then(profile => {
      if (!profile) {
        throw 404;
      }

      return profile;
    })
    .then(respondWithResult(res))
    .catch(handleError(req, res));
}

export function update(req, res) {
  let profile = req.profile;

  for (let property in req.body) {
    profile.set(property, req.body[property]);
  }

  profile
    .save()
    .then(respondWithResult(res))
    .catch(handleError(req, res));
}

export function create(req, res) {
  Profile
    .create({user: req.params.userId})
    .then(respondWithResult(res, 201))
    .catch(handleError(req, res));
}

export function destroy(req, res) {
  req.profile
    .remove()
    .then(() => res.sendStatus(204))
    .catch(handleError(req, res));
}


export function profileCount(req, res) {
  Profile
    .count({user: req.params.userId})
    .exec()
    .then(count => {
      return res.json({count});
    });
}

function handleError(req, res) {
  return function(statusCode, err) {
    statusCode = statusCode || 500;

    if (err) {
      req.log.error(err);
      res.status(statusCode).send(err);
    } else {
      res.status(statusCode).send('Server error');
    }

    return null;
  };
}
