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

    var done = this.async();

    grunt.log.writeln("HELLO FROM I18NEXT-CONV 5");


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
            grunt.log.error('Domain must be specified for ' + filepath);
            return false;
          }
          return true;
        }
      }).map(function(filepath) {
        //Convert files using i18next-conv
        require('i18next-conv').process(f.domain, filepath, f.dest, {quiet: true}, function(err) {
          if (err) {
            console.log('\nfailed writing file\n\n'.red);
          } else {
            console.log('\nfile written\n\n'.green);
          }
        });
      });

    });
  });

};
