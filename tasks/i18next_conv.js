/*
 * grunt-i18next-conv
 * https://github.com/aaronlecompte/grunt-i18next-conv
 *
 * Copyright (c) 2013 Aaron Le Compte
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('i18next_conv', 'Convert files using i18next-conv.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
        domainCallback: false,
        quiet: true,
    });

    var filecount = 0;
    var done = this.async();
    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {

        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          if(!f.domain) {
               if( options.domainCallback && 'function' === typeof options.domainCallback ){
                    f.domain = options.domainCallback( f );
               }
               if( !f.domain ){
                    grunt.log.error('Domain must be specified for ' + filepath);
                    return false;
               }
          }
          return true;
        }
      }).map(function(filepath) {
        //Convert files using i18next-conv
        filecount++;
        require('i18next-conv').process(f.domain, filepath, f.dest, options, function(err) {
          filecount--;
          if (err) {
            console.log(('Failed writing file: ' + filepath +'\n').red);
            done(false);
          } else {
            console.log(('File written: ' + filepath +'\n').green);
            if(filecount === 0) {
              done();
            }
          }
        });
      });

    });
  });

};
