module.exports = {
  options: {
    // This should be the name of your apps angular module
    module: 'evaluationApp',
    usemin: 'app/app.js'
  },
  main: {
    cwd: 'client',
    src: ['{app,components}/**/*.html'],
    dest: '.tmp/templates.js'
  }
};
