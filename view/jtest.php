<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>jTest - Javascript framework testing suite</title>
        <link href="../public/cssmin/jtest_min.css" rel="stylesheet" media="all" />
    </head>

    <body>
        <?php $app = strtolower($_GET['app']); ?>
        <?php $framework = strtolower($_GET['framework']); ?>

        <?php if (file_exists('../bower_components/' . $framework . '/bower.json')): ?>
            <?php
                $contents = file_get_contents('../bower_components/' . $framework . '/bower.json');
                $json = json_decode($contents, true);
            ?>
            <h1 class="jtest-js-framework jtest-title-framework">
                <a href="<?php echo $_SERVER['SCRIPT_NAME'] . '?' . $_SERVER['QUERY_STRING']; ?>" target="_parent" data-version="<?php echo $json['version'] ?>"><?php echo $json['name']; ?></a>
            </h1>
        <?php endif; ?>

        <ul class="jtest-js-statistic jtest-list-statistic">
            <?php if (file_exists('../public/jsmin/' . $framework . '_min.js')): ?>
                <li>package: <?php echo round(filesize('../public/jsmin/' . $framework . '_min.js') / 1024, 2); ?> kb
                    (<?php echo round(strlen(gzcompress(file_get_contents('../public/jsmin/' . $framework . '_min.js'))) / 1024, 2); ?> kb)
                </li>
            <?php endif; ?>
        </ul>

        <div class="jtest-js-debug jtest-box-debug jtest-is-error">something went wrong</div>
        <?php include_once('scripts.php'); ?>

        <?php if (!empty($app) && file_exists('../../' . $app . '/index.php')): ?>
            <h2 class="jtest-title-app"><?php echo $app; ?></h2>
            <div class="jtest-js-wrapper jtest-wrapper-app"><?php include_once('../../' . $app . '/index.php'); ?></div>
        <?php endif; ?>

    </body>
</html>