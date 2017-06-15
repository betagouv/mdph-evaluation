'use strict';

import moment from 'moment';
import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import * as Mailer from './send-mail.controller';

const EmailTemplate = require('email-templates').EmailTemplate;

import config from '../../config/environment';

function compileContent(contentFile) {
  const contentTemplate =  String(fs.readFileSync(path.join(__dirname, 'templates', 'specific-content', contentFile)));
  return Handlebars.compile(contentTemplate);
}


const confirmationContentCompiled = compileContent('confirm-content.html');

const genericTemplate = path.join(__dirname, 'templates', 'generic-email');

function generateEmailBodyWithTemplate(options) {
  let {title, content, footer} = options;
  let template = new EmailTemplate(genericTemplate);

  let locals = {};
  locals.title = new Handlebars.SafeString(title);
  locals.content = new Handlebars.SafeString(content);

  if (footer) {
    locals.footer = new Handlebars.SafeString(footer);
  }

  return template
    .render(locals)
    .then(function(result) {
      return result.html;
    });
}

export function sendConfirmationMail(emailDest, confirmationUrl) {
  let options = {};
  options.title = 'Veuillez confirmer votre adresse e-mail';
  options.content = confirmationContentCompiled({confirmationUrl: confirmationUrl});
  options.footer = urlFooterCompiled({url: confirmationUrl});

  return generateEmailBodyWithTemplate(options)
    .then(htmlContent => {
      Mailer.sendMail(emailDest, options.title, htmlContent);
    });
}

export function generateReceptionMail(request, options, title) {
  options.title = title;
  options.content = receptionContentCompiled({request, options});

  if (options.url) {
    options.footer = urlFooterCompiled({url: options.url});
  }

  return generateEmailBodyWithTemplate(options);
}

export function sendMailRenewPassword(emailDest, confirmationUrl) {
  let options = {};
  options.title = 'Nouveau mot de passe';
  options.content = 'Veuillez cliquer ici pour continuer votre changement de mot de passe :<br>' + confirmationUrl;

  return generateEmailBodyWithTemplate(options)
    .then(htmlContent => {
      Mailer.sendMail(emailDest, options.title, htmlContent);
    });
}
