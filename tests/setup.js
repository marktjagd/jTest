(function ($, win)
{
    'use strict';

    win.mocha.setup('bdd');

    /* blanket */

    if (win.PHANTOMJS)
    {
        win.blanket.options('reporter', '../node_modules/grunt-blanket-mocha/support/grunt-reporter.js');
    }
})(window.jBone || window.Zepto || window.jQuery, window);