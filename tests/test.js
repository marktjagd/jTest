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
    });
})(window.jBone || window.Zepto || window.jQuery, window);