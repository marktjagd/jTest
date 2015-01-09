/**
 * @tableofcontents
 *
 * 1. add many
 * 2. remove many
 * 3. add class
 * 4. remove class
 * 5. ajax
 */

(function ()
{
    'use strict';

    /* @section 1. add many */

    DOMTokenList.prototype.addMany = function(className)
    {
        var classArray = className.split(' ');

        for (var i = 0; i < classArray.length; i++)
        {
            this.add(classArray[i]);
        }
    };

    /* @section 2. remove many */

    DOMTokenList.prototype.removeMany = function(className)
    {
        var classArray = className.split(' ');

        for (var i = 0; i < classArray.length; i++)
        {
            this.remove(classArray[i]);
        }
    };

    /* @section 3. add class */

    jBone.fn.addClass = function (className)
    {
        for (var i = 0; i < this.length; i++)
        {
            this[i].classList.addMany(className);
        }
        return this;
    };

    /* @section 4. remove class */

    jBone.fn.removeClass = function (className)
    {
        for (var i = 0; i < this.length; i++)
        {
            this[i].classList.removeMany(className);
        }
        return this;
    };

    /* @section 5. ajax */

    jBone.ajax = {};

    /* reqwest is present */

    if (typeof win.reqwest === 'function' && typeof win.reqwest.compat === 'function')
    {
        jBone.ajax = win.reqwest.compat;
    }
})();