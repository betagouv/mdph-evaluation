'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.IP ||
            undefined,

  // Server hist and port
  port:     process.env.PORT ||
            9007,
  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGODB_URL ||
            process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            'mongodb://localhost/evaluation'
  }
};
