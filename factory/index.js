'use strict';
var utils = require('../utils')
  , yeoman = require('yeoman-generator');


var Generator = module.exports = yeoman.generators.NamedBase.extend();

Generator.prototype.writing = function writing() {
  var appName = utils.getAppName(this.config.path);
  var factoryName = utils.lowerCamel(this.name);

  var context = {
    appName: appName,
    factoryName: factoryName
  };

  this.template('_factory.js', 'src/js/factories/' + factoryName + '.js', context);
  this.template('_spec.js', 'tests/unit/factories/' + factoryName + '.spec.js', context);
};