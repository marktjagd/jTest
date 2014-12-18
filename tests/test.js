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
        it('addClass is function', function()
        {
            assert.isFunction($.fn.addClass);
        });
        it('removeClass is function', function()
        {
            assert.isFunction($.fn.removeClass);
        });
        it('jTest is object', function()
        {
            assert.isObject(jTest);
        });
    });
})(window.jBone || window.Zepto || window.jQuery, window);