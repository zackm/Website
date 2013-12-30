module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
					'src/js/jquery.min.js',
					'src/js/modernizr.custom.js',
					'src/js/bootstrap.min.js',
					'src/js/fluidvids.min.js',
					'src/js/prefixfree.min.js',
					'src/js/pagetransitions.js',
					'src/js/index.js'
				],
				dest: 'dist/js/prod.js'
			}
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'src/img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/img'
				}]
			}
		},

		stylus: {
			compile: {
				options: {
					'include css': true,
					compress: true,
				},
				files: {
					'dist/css/prod.css': 'src/css/main.styl'
				}
			}
		},

		jade: {
			compile: {
				options: {
					data: {
						debug: true
					}
				},
				files: {
					'index.html': ['src/jade/index.jade']
				}
			}
		},

		watch: {
			scripts:  {
				files: ['src/js/*.js'],
				tasks: ['concat'],
				options: {
					spawn: false
				}
			},
			css: {
				files: ['src/css/*.styl', 'src/css/*.css'],
				tasks: ['stylus'],
				options: {
					spawn: false
				}
			},
			images: {
				files: ['src/img/*'],
				tasks: ['imagemin'],
				options: {
					spawn: false
				}
			},
			html: {
				files: ['src/jade/*.jade', 'src/jade/includes/*.jade'],
				tasks: ['jade'],
				options: {
					spawn: false
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-jade')
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jade', 'concat', 'stylus', 'imagemin', 'watch']);
};
