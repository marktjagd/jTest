/**
 * @tableofcontents
 *
 * 1. general
 *    1.1 framework is present
 *    1.2 namespace is present
 * 2. extend
 *    2.1 addClass is function
 *    2.2 removeClass is function
 */

(function ($, win)
{
    'use strict';

    var describe = win.describe,
        it = win.it,
        assert = win.assert;

    /* @section 1. general */

    describe('general', function ()
    {
        /* @section 1.1 framework is present */

        it('framework is present', function ()
        {
            assert.isFunction($);
        });

        /* @section 1.2 namespace is present */

        it('namespace is present', function ()
        {
            assert.isObject(jTest);
        });
    });

    /* @section 2. extend */

    describe('extend', function ()
    {
        /* @section 2.1 addClass is function */

        it('addClass is function', function ()
        {
            assert.isFunction($.fn.addClass);
        });

        /* @section 2.2 removeClass is function */

        it('removeClass is function', function ()
        {
            assert.isFunction($.fn.removeClass);
        });
    });
})(window.jBone || window.Zepto || window.jQuery, window);