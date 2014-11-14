'use strict';

module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		protractor: {
			options: {
				configFile: 'protractor.conf.js',
				args: {
					params: {
						port: '<%= connect.test.options.port %>'
					}
				}
			},
			e2e: {
				options: {
					keepAlive: true
				}
			},
			manual: {
				options: {
					debug: true
				}
			}
		},
		jshint: {
			gruntfile: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: 'Gruntfile.js'
			},
			e2e_test: {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src: ['test/**/*.js']
			}
		},
		watch: {
			gruntfile: {
				files: 'Gruntfile.js',
				tasks: ['jshint:gruntfile']
			},
			e2e_test: {
				files: ['test/**/*.js'],
				tasks: ['jshint:e2e_test', 'connect:test', 'protractor:e2e']
			}
		},
		connect: {
			development: {
				options: {
					base: '.',
					port: 8000,
					keepalive: true
				}
			},
			test: {
				options: {
					base: '.',
					port: 8001
				}
			},
			coverage: {
				options:{
					base: 'coverage/',
					port: 8002,
					keepalive: true
				}
			}
		},
		open: {
			preview: {
				path: 'http://localhost:<%= connect.development.options.port %>/frontend'
			},
			test: {
				path: 'http://localhost:<%= connect.test.options.port %>/frontend'
			},
			coverage:{
				path: 'http://localhost:<%= connect.coverage.options.port %>/frontend'
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-protractor-runner');

	// Default task.
	grunt.registerTask('default', ['jshint', 'connect:test', 'protractor:e2e']);
	grunt.registerTask('preview', ['open:preview', 'connect:development']);
	grunt.registerTask('test', ['open:test', 'connect:test', 'protractor:manual']);
	grunt.registerTask('coverage', ['open:coverage', 'connect:coverage']);
};
