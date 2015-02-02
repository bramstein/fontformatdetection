var extend = require('extend');

module.exports = function (grunt) {
  var compilerOptions = {
    compilation_level: 'ADVANCED_OPTIMIZATIONS',
    warning_level: 'VERBOSE',
    summary_detail_level: 3,
    language_in: 'ECMASCRIPT5_STRICT',
    output_wrapper: '(function(){%output%}());',
    use_types_for_optimization: true,
    externs: ['node_modules/fontfaceobserver/externs.js']
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['build'],
    jshint: {
      all: ['src/**/*.js'],
      options: {
        // ... better written as dot notation
        "-W069": true,

        // type definitions
        "-W030": true,

        // Don't make functions within loops
        "-W083": true,

        // Wrap the /regexp/ literal in parens to disambiguate the slash operator
        "-W092": true
      }
    },
    closurecompiler: {
      dist: {
        files: {
          "fontformat.js": ['src/**/*.js']
        },
        options: compilerOptions
      },
      compile: {
        files: {
          "build/fontformat.js": ['src/**/*.js'],
        },
        options: compilerOptions
      },
      debug: {
        files: {
          "build/fontformat.debug.js": ['src/**/*.js']
        },
        options: extend({}, compilerOptions, {
          debug: true,
          formatting: ['PRETTY_PRINT', 'PRINT_INPUT_DELIMITER']
        })
      }
    },
    concat: {
      dist: {
        src: ['build/fontformat.js'],
        dest: 'fontformat.js'
      },
      dist_standalone: {
        src: [
          'node_modules/promis/promise.js',
          'node_modules/fontfaceobserver/fontfaceobserver.js',
          'build/fontformat.js'],
        dest: 'fontformat.standalone.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-closurecompiler');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('compile', ['closurecompiler:compile']);
  grunt.registerTask('debug', ['closurecompiler:debug']);
  grunt.registerTask('default', ['compile']);
  grunt.registerTask('dist', ['clean', 'closurecompiler:compile', 'concat:dist', 'concat:dist_standalone']);
};
