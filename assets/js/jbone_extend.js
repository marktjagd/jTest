/**
 * @tableofcontents
 *
 * 1. ajax
 */

(function (win)
{
    'use strict';

    /* @section 1. ajax */

    jBone.ajax = {};

    /* reqwest is present */

    if (typeof win.reqwest === 'function' && typeof win.reqwest.compat === 'function')
    {
        jBone.ajax = win.reqwest.compat;
    }
})(window);