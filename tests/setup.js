(function ($, win)
{
    'use strict';

    win.mocha.setup('bdd');

    /* chai */

    if (typeof chai === 'object')
    {
        win.should = win.chai.should;
        win.expect = win.chai.expect;
        win.assert = win.chai.assert;
    }

    /* blanket */

    if (win.PHANTOMJS)
    {
        win.blanket.options('reporter', '../node_modules/grunt-blanket-mocha/support/grunt-reporter.js');
    }
})(window.jBone || window.Zepto || window.jQuery, window);