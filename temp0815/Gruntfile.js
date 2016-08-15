"use strict";
module.exports = function(grunt){
	// var obj1 = ["jpg,gif,png"];
	grunt.initConfig({
		pag : grunt.file.readJSON('package.json'),
		imagemin : {
			task1:{
				options:{
					optimizationLevel:3
				},
				files:[{
					expand:true,
					cwd:'./',
					src:['*.{png,jpg,gif}'],
					dest:'./dist/'
				}]
			}
		},
		clean : {
			build:{
				src:['./dist/*.<%= pag.imagePrefix.prefix %>','./dist/*']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask('imgmin',['imagemin']);
	grunt.registerTask('dirC',['clean']);
};