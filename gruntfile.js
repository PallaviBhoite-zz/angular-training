module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                src: [
                    './app/app.js',
                    './app/routes/*.js',
                    './app/services/*.js',
                    './app/view1/*.js',
                    './app/view2/*.js'
                ],
                dest: './app/dest/app.js'
            }
        },
        uglify: {
            js: {
                src: ['./app/dest/app.js'],
                dest: './app/dest/min/app.min.js'
            }
        }
        //grunt task configuration will go here
    });
    //load grunt task
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
    //register grunt default task
    grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify']);
};