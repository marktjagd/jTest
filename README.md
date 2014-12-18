![jTest](http://m07.imgup.net/jTest557f.png)


jTest
=====

> Javascript framework testing suite for web applications using jQuery's interface.


Install
-------

Run <code>install.sh</code> from console to fetch dependencies and deploy assets:

<pre>sh install.sh</pre>

Extend jBone with Reqwest to support AJAX as well:

<pre>grunt uglify:jboneAjax</pre>


App
---

Include the <code>index.php</code> of your custom web applications into jTest:

<pre>jTest/?app={your-app}</pre>


Tasks
-----

* default
  + [csslint](https://www.npmjs.org/package/grunt-contrib-csslint)
  + [htmlhint](https://www.npmjs.org/package/grunt-htmlhint)
  + [jshint](https://www.npmjs.org/package/grunt-contrib-jshint)
  + [jsonlint](https://www.npmjs.org/package/grunt-jsonlint)

* test
  + [mocha](https://www.npmjs.com/package/grunt-mocha)
  + [blanket_mocha](https://www.npmjs.com/package/grunt-blanket-mocha)

* deploy
  + [cssmin](https://www.npmjs.org/package/grunt-contrib-cssmin)
  + [uglify](https://www.npmjs.org/package/grunt-contrib-uglify)

* {standalone}
  + [autoprefixer](https://www.npmjs.org/package/grunt-autoprefixer)


Libraries
---------

* [jBone](https://github.com/kupriyanenko/jbone)
* [Zepto](https://github.com/madrobby/zepto)
* [jQuery](https://github.com/jquery/jquery)
* [Mocha](https://github.com/mochajs/mocha)
* [Chai](https://github.com/chaijs/chai)
* [Blanket](https://github.com/alex-seville/blanket)
* [Boomerang](https://github.com/yahoo/boomerang)
* [Reqwest](https://github.com/ded/reqwest)
* [Polyfills](https://github.com/remy/polyfills)
