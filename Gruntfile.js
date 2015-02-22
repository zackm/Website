module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
					'src/js/jquery.min.js',
					'src/js/jquery.matchHeight.min.js',
					'src/js/modernizr.custom.js',
					'src/js/bootstrap.min.js',
					'src/js/fluidvids.min.js',
					'src/js/prefixfree.min.js',
					'src/js/pagetransitions.js',
					'src/js/index.js'
				],
				dest: 'dist/js/prod.js'
			},
			rr_js: {
				src: [
					'roomright/assets/jquery.js',
					'roomright/assets/jquery_ujs.js',
					'roomright/assets/bootstrap-datepicker.js',
					'roomright/assets/bootstrap.min.js',
					'roomright/assets/intro.min.js',
					'roomright/assets/nod.js',
					'roomright/assets/prefixfree.min.js',
					'roomright/assets/jquery.ui.core.js',
				],
				dest: 'roomright/assets/prod.js'
			},
			rr_css: {
				src: [
					'roomright/assets/bootstrap-responsive.min.css',
					'roomright/assets/bootstrap.min.css',
					'roomright/assets/font-awesome-ie7.min.css',
					'roomright/assets/font-awesome.min.css',
					'roomright/assets/index.css'
				],
				dest: 'roomright/assets/prod.css'
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

		compress: {
			main: {
				options: {
					mode: 'gzip'
				},
				expand: true,
				cwd: '',
				src: ['*.html', 'dist/css/prod.css', 'dist/js/prod.js'],
				dest: 'compressed/'
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
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jade', 'concat', 'stylus', 'compress', 'imagemin', 'watch']);
};
