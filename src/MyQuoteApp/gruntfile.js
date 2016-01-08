/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {

    //Iniciar Dependencias
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        enfear: {
            Opcao: {
                banner: '/ *!<% = pkg.name%> <% = grunt.template.today("aaa-mm-dd")%> * /\n'
            }
        },
        construir: {

        }

    });
};