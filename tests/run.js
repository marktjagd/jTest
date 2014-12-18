(function (win)
{
    'use strict';

    win.mocha.run();
    if (typeof win.blanket === 'object' && typeof win.blanket.run === 'function')
    {
        win.blanket.run();
    }
})(window);