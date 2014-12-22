/**
 * @tableofcontents
 *
 * 1. framework
 * 2. extend
 */

(function ($, win)
{
    'use strict';

    var describe = win.describe,
        it = win.it,
        assert = win.assert;

    /* @section 1. framework */

    describe('framework', function()
    {
        it('$ is function', function()
        {
            assert.isFunction($);
        });
        it('jTest is object', function()
        {
            assert.isObject(jTest);
        });
    });

    /* @section 2. extend */

    describe('extend', function()
    {
        it('addClass is function', function()
        {
            assert.isFunction($.fn.addClass);
        });
        it('removeClass is function', function()
        {
            assert.isFunction($.fn.removeClass);
        });
    });
})(window.jBone || window.Zepto || window.jQuery, window);