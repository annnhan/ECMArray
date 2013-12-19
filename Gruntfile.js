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
                    'src/end.js'
                ],
                dest: 'build/ecmarray.js'
            }
        },

        uglify: {
            //文件头部输出信息
            options: {
                banner: '/* https://github.com/hanan198501/ECMArray.git */\n'
            },
            //具体任务配置
            build: {
                //源文件
                src: 'build/ecmarray.js',
                //目标文件
                dest: 'build/ecmarray-min.js'
            }
        }
    });

    // 加载指定插件任务
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 默认执行的任务
    grunt.registerTask('default', ['concat', 'uglify']);

};