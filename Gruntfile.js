/**
 * Created by an.han on 13-12-19.
 */
module.exports = function (grunt) {

    // 构建任务配置
    grunt.initConfig({
        //读取package.json的内容，形成个json数据
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                banner: '/* https://github.com/hanan198501/ECMArray.git */\n',
                separator: '\n'
            },
            dist: {
                src: [
                    'src/start.js',
                    'src/basic.js',
                    'src/isArray.js',
                    'src/forEach.js',
                    'src/map.js',
                    'src/end.js'
                ],
                dest: 'build/ecmarray.js'
            }
        },

        uglify: {
            options: {
                banner: '/* https://github.com/hanan198501/ECMArray.git */\n'
            },
            build: {
                src: 'build/ecmarray.js',
                dest: 'build/ecmarray-min.js'
            }
        },

        cachebuster: {
            build: {
                options: {
                    format: 'json',
                    basedir: 'build/',
                    formatter: function(hashes) {
                        var arr = [];
                        for (var i in hashes) {
                            arr.push(i);
                        }
                        return JSON.stringify(hashes, arr, 4);
                    }
                },
                src: [ 'build/*.js' ],
                dest: 'build/MD5.json'
            }
        }
    });

    // 加载指定插件任务
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-cachebuster');

    // 默认执行的任务
    grunt.registerTask('default', ['concat', 'uglify', 'cachebuster']);

};