module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
              separator: ';'
            },
            dist: {
              src: ['src/**/*.js'],
              dest: 'dist/<%= pkg.name %>.js'
            }
          },
          uglify: {
            options: {
                manage: false
              },
            dist: {
              files: {
                'js/main.min.js': ['js/main.js']
              }
            }
          },
          qunit: {
            files: ['test/**/*.html']
          },
          jshint: {
            // define the files to lint
            files: ['Gruntfile.js', 'src/**/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
              // more options here if you want to override JSHint defaults
              globals: {
                jQuery: true,
                console: true,
                module: true
              }
            }
          },
          watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint','qunit']
          }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat', 'uglify','jshint','watch']);
};