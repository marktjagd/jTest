/**
* @tableofcontents
*
* 1. lint
* 2. deploy
* 3. test
**/

module.exports = function(grunt)
{
    'use strict';

    grunt.initConfig(
    {
        /* @section 1. lint */

        csslint:
        {
            jtest:
            {
                src:
                [
                    'assets/css/*.css'
                ]
            },
            options:
            {
                csslintrc: '.csslintrc'
            }
        },
        htmlhint:
        {
            jtest:
            {
                src:
                [
                    'index.php',
                    'tests/*.html',
                    'view/*.php'
                ]
            },
            options:
            {
                htmlhintrc: '.htmlhintrc'
            }
        },
        jshint:
        {
            dependency:
            {
                src:
                [
                    'gruntfile.js'
                ]
            },
            jtest:
            {
                src:
                [
                    'assets/js/*.js'
                ]
            },
            test:
            {
                src:
                [
                    'tests/*.js'
                ]
            },
            options:
            {
                jshintrc: '.jshintrc'
            }
        },
        jsonlint:
        {
            dependency:
            {
                src:
                [
                    'bower.json',
                    'package.json'
                ]
            }
        },

        /* @section 2. deploy */

        cssmin:
        {
            jtest:
            {
                src:
                [
                    'assets/css/reset.css',
                    'assets/css/jtest.css'
                ],
                dest: 'public/cssmin/jtest.min.css'
            }
        },
        uglify:
        {
            boomerang:
            {
                src:
                [
                    'bower_components/boomerang/boomerang.js',
                    'bower_components/boomerang/plugins/bw.js',
                    'bower_components/boomerang/plugins/rt.js',
                    'bower_components/boomerang/plugins/mobil.js'
                ],
                dest: 'public/jsmin/boomerang.min.js'
            },
            jbone:
            {
                src:
                [
                    'bower_components/jbone/dist/jbone.js',
                    'bower_components/html5-polyfills/classList.js',
                    'bower_components/jbone-extend/addclass.js',
                    'bower_components/jbone-extend/removeclass.js'
                ],
                dest: 'public/jsmin/jbone.min.js'
            },
            jboneAjax:
            {
                src:
                [
                    'bower_components/jbone/dist/jbone.js',
                    'bower_components/html5-polyfills/classList.js',
                    'bower_components/jbone-extend/addclass.js',
                    'bower_components/jbone-extend/removeclass.js',
                    'node_modules/reqwest/reqwest.js',
                    'assets/js/jbone_extend.js'
                ],
                dest: 'public/jsmin/jbone.min.js'
            },
            zepto:
            {
                src:
                [
                    'bower_components/zepto/zepto.js'
                ],
                dest: 'public/jsmin/zepto.min.js'
            },
            jquery:
            {
                src:
                [
                    'bower_components/jquery/dist/jquery.js'
                ],
                dest: 'public/jsmin/jquery.min.js'
            }
        },

        /* @section 3. test */

        mocha:
        {
            jbone:
            {
                src:
                [
                    'tests/jbone.html'
                ]
            },
            zepto:
            {
                src:
                [
                    'tests/zepto.html'
                ]
            },
            jquery:
            {
                src:
                [
                    'tests/jquery.html'
                ]
            },
            options:
            {
                reporter: 'Spec',
                logErrors: true
            }
        },
        blanket_mocha:
        {
            jbone:
            [
                'tests/jbone.html'
            ],
            zepto:
            [
                'tests/zepto.html'
            ],
            jquery:
            [
                'tests/jquery.html'
            ],
            options:
            {
                threshold: 80
            }
        }
    });

    /* load tasks */

    grunt.loadNpmTasks('grunt-blanket-mocha');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-mocha');

    /* register tasks */

    grunt.registerTask('default',
    [
        'csslint',
        'htmlhint',
        'jshint',
        'jsonlint'
    ]);
    grunt.registerTask('test',
    [
        'mocha',
        'blanket_mocha'
    ]);
    grunt.registerTask('deploy',
    [
        'cssmin',
        'uglify:boomerang',
        'uglify:jbone',
        'uglify:zepto',
        'uglify:jquery'
    ]);
};