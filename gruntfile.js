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
        autoprefixer:
        {
            jtest:
            {
                src:
                [
                    'assets/css/*.css'
                ]
            }
        },
        
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
                dest: 'public/cssmin/jtest_min.css'
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
                dest: 'public/jsmin/boomerang_min.js'
            },
            jbone:
            {
                src:
                [
                    'bower_components/jbone/dist/jbone.js',
                    'bower_components/html5-polyfills/classList.js',
                    'assets/js/jbone_extend.js'
                ],
                dest: 'public/jsmin/jbone_min.js'
            },
            jboneAjax:
            {
                src:
                [
                    'bower_components/jbone/dist/jbone.js',
                    'bower_components/html5-polyfills/classList.js',
                    'node_modules/reqwest/reqwest.js',
                    'assets/js/jbone_extend.js'
                ],
                dest: 'public/jsmin/jbone_min.js'
            },
            zepto:
            {
                src:
                [
                    'bower_components/zepto/zepto.js'
                ],
                dest: 'public/jsmin/zepto_min.js'
            },
            jquery:
            {
                src:
                [
                    'bower_components/jquery/dist/jquery.js'
                ],
                dest: 'public/jsmin/jquery_min.js'
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
                threshold: 70
            }
        }
    });

    /* load tasks */

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-blanket-mocha');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-mocha');

    /* register tasks */

    grunt.registerTask('default',
    [
        'csslint',
        'htmlhint',
        'jshint'
    ]);
    grunt.registerTask('test',
    [
        'mocha',
        'mocha_istanbul'
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