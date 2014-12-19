<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>jTest - Javascript framework testing suite</title>
    </head>

    <?php $app = strtolower($_GET['app']); ?>

    <frameset cols="33.33%, *, 33.33%" frameborder="no">
        <frame src="view/jtest.php?framework=jbone&amp;boomerang=on&amp;app=<?php echo $app; ?>" scrolling="no" />
        <frame src="view/jtest.php?framework=zepto&amp;boomerang=on&amp;app=<?php echo $app; ?>"" scrolling="no" />
        <frame src="view/jtest.php?framework=jquery&amp;boomerang=on&amp;app=<?php echo $app; ?>"" scrolling="no" />
    </frameset>
</html>