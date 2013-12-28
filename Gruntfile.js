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

		watch: {
			scripts:  {
				files: ['js/*.js'],
				tasks: ['concat'],
				options: {
					spawn: false
				}
			},
			css: {
				files: ['css/*.styl'],
				tasks: ['stylus'],
				options: {
					spawn: false
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'stylus', 'imagemin', 'watch']);
};
