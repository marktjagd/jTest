/**
 * @tableofcontents
 *
 * 1. print debug
 * 2. print boomerang
 * 3. print method
 * 4. document ready
 */

(function ($, win)
{
    'use strict';

    win.jTest = win.jTest || {};

    /* misc */

    jTest.version = '1.0.0';

    /* wording */

    jTest.wording =
    {
        noError: 'no error occurred',
        inFile: 'in file',
        onLine: 'on line'
    };

    /* elements */

    jTest.elements =
    {
        body: $('body'),
        statistic: $('ul.jtest-js-statistic'),
        debug: $('div.jtest-js-debug')
    };

    /* @section 1. print debug */

    jTest.printDebug = function ()
    {
        var counter = 0;

        jTest.elements.debug.removeClass('jtest-is-error').html(jTest.wording.noError);

        /* listen on error */

        win.onerror = function (message, url, line)
        {
            if (counter++ === 0)
            {
                jTest.elements.debug.addClass('jtest-is-error').empty();
            }
            $('<p>' + message + ' ' + jTest.wording.inFile + ' ' + url + ' ' + jTest.wording.onLine + ' ' + line + '</p>').appendTo(jTest.elements.debug);
        };
    };

    /* @section 2. print boomerang */

    jTest.printBoomerang = function ()
    {
        win.BOOMR.subscribe('before_beacon', function (results)
        {
            /* process results */

            for (var i in results)
            {
                if (i === 'bw')
                {
                    $('<li>bandwidth: ' + Math.round(results[i] / 1024) + ' kb/s</li>').appendTo(jTest.elements.statistic);
                }
                if (i === 'lat')
                {
                    $('<li>latency: ' + Math.round(results[i]) + ' ms</li>').appendTo(jTest.elements.statistic);
                }
                if (i === 't_done')
                {
                    $('<li>pageload: ' + Math.round(results[i]) + ' ms</li>').appendTo(jTest.elements.statistic);
                }
                if (i === 't_resp')
                {
                    $('<li>response: ' + Math.round(results[i]) + ' ms</li>').appendTo(jTest.elements.statistic);
                }
            }
        });
    };

    /* @section 3. print method */

    jTest.printMethod = function ()
    {
        var counter = 0;

        /* global */

        for (var i in $)
        {
            if ($.hasOwnProperty(i))
            {
                counter++;
            }
        }

        /* prototype */

        for (var j in $.fn)
        {
            if ($.fn.hasOwnProperty(j))
            {
                counter++;
            }
        }
        $('<li>method: ' + counter + '</li>').appendTo(jTest.elements.statistic);
    };

    /* @section 4. document ready */

    $(function ()
    {
        jTest.printDebug();
        jTest.printMethod();

        /* ready */

        jTest.elements.body
            .find('h1.jtest-js-framework')
            .addClass('jtest-is-ready');

        /* boomerang */

        if (typeof win.BOOMR === 'object')
        {
            jTest.printBoomerang();
        }
    });
})(window.jBone || window.Zepto || window.jQuery, window);