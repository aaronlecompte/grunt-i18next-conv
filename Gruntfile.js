/*
 * grunt-i18next-conv
 * https://github.com/aaronlecompte/grunt-i18next-conv
 *
 * Copyright (c) 2013 Aaron Le Compte
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    i18next_conv: {
      default_options_json2po: {
        options: {
          noDate: true
        },
        files: [
          {
            dest: 'tmp/default.po',
            src: 'test/fixtures/json.json',
            domain: 'en'
          }
        ],
      },
      default_options_po2json: {
        options: {
        },
        files: [
          {
            dest: 'tmp/default.json',
            src: 'test/fixtures/default.po',
            domain: 'en'
          }
        ],
      },
      custom_options_json2po: {
        options: {
          keyseparator: '.',
          noDate: true
        },
        files: [
          {
            dest: 'tmp/custom.po',
            src: 'test/fixtures/json.json',
            domain: 'en'
          }
        ],
      },
      custom_options_po2json: {
        options: {
          keyseparator: '.'
        },
        files: [
          {
            dest: 'tmp/custom.json',
            src: 'test/fixtures/custom.po',
            domain: 'en'
          }
        ],
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'i18next_conv', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
