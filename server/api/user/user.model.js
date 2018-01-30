'use strict';

import mongoose, {Schema} from 'mongoose';
import crypto from 'crypto';

var UserSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true, unique: true, required: true },
  mdph: { type: Schema.Types.ObjectId, ref: 'Mdph' },
  hashedPassword: { type: String, select: false },
  salt:  { type: String, select: false }
});

/**
 * Virtuals
 */
UserSchema
  .virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

UserSchema
  .virtual('info')
  .get(function() {
    return {
      _id: this._id,
      name: this.name,
      email: this.email,
      mdph: this.mdph,
    };
  });

/**
 * Validations
 */

// Validate empty email
UserSchema
  .path('email')
  .validate(function(email) {
    return email.length;
  }, 'Le mail ne peut pas être vide.');

// Validate empty password
UserSchema
  .path('hashedPassword')
  .validate(function(hashedPassword) {
    return hashedPassword.length;
  }, 'Le mot de passe ne peut pas être vide.');

// Validate email is not taken
UserSchema
  .path('email')
  .validate(function(value, respond) {
    var _this = this;
    this.constructor.findOne({email: value}, function(err, user) {
      if (err) throw err;
      if (user) {
        if (_this.id === user.id) return respond(true);
        return respond(false);
      }

      respond(true);
    });
  }, 'Cette adresse est déjà utilisée.');

var validatePresenceOf = function(value) {
  return value && value.length;
};

/**
 * Pre-save hook
 */
UserSchema
  .pre('save', function(next) {
    if (!this.isNew) return next();

    if (!validatePresenceOf(this.hashedPassword))
      next(new Error('Mot de passe incorrect'));
    else
      next();
  });

/**
 * Methods
 */
UserSchema.methods = {
  /**
   * Authenticate - check if the passwords are the same
   *
   * @param {String} plainText
   * @return {Boolean}
   * @api public
   */
  authenticate(plainText) {
    return this.encryptPassword(plainText) === this.hashedPassword;
  },

  /**
   * Make salt
   *
   * @return {String}
   * @api public
   */
  makeSalt() {
    return crypto.randomBytes(16).toString('base64');
  },

  /**
   * Encrypt password
   *
   * @param {String} password
   * @return {String}
   * @api public
   */
  encryptPassword(password) {
    if (!password || !this.salt) return '';
    var salt = new Buffer(this.salt, 'base64');
    return crypto.pbkdf2Sync(password, salt, 10000, 64, 'SHA1').toString('base64');
  }
};

export default mongoose.model('User', UserSchema);
