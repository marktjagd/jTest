/**
 * @tableofcontents
 *
 * 1. add class
 * 2. remove class
 */

(function (win)
{
    'use strict';

    /* @section 1. add class*/

    jBone.fn.addClass = function (className)
    {
        for (var i = 0; i < this.length; i++)
        {
            this[i].classList.add(className);
        }
        return this;
    };

    /* @section 2. remove class*/

    jBone.fn.removeClass = function (className)
    {
        for (var i = 0; i < this.length; i++)
        {
            this[i].classList.remove(className);
        }
        return this;
    };

    /* @section 3. ajax */

    jBone.ajax = {};

    /* reqwest is present */

    if (typeof win.reqwest === 'function' && typeof win.reqwest.compat === 'function')
    {
        jBone.ajax = win.reqwest.compat;
    }
})(window);