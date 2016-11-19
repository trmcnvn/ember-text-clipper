/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-text-clipper',

  options: {
    nodeAssets: {
      'text-clipper': {
        import: ['dist/index.js']
      }
    }
  },

  included: function(app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/ember-text-clipper/shim.js', {
      exports: { 'clip': ['default'] }
    });
  }
};
