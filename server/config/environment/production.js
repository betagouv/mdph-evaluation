'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.IP ||
            undefined,

  // Base URL
  baseURL:  process.env.BASE_URL ||
            'http://localhost:9000/',

  // Server hist and port
  port:     process.env.PORT ||
            9000,
  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGODB_URL ||
            process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            'mongodb://localhost/evaluation'
  }
};
