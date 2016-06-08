(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['emmetCodeMirror'] };
  }

  define('emmet', [], vendorModule);
})();
