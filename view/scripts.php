<?php
$framework = strtolower($_GET['framework']);
$boomerang = strtolower($_GET['boomerang']);
?>

<?php if (file_exists('../public/jsmin/' . $framework . '_min.js')): ?>
    <script src="../public/jsmin/<?php echo $framework; ?>_min.js"></script>
<?php endif; ?>

<?php if ($boomerang === 'on'): ?>
    <script src="../public/jsmin/boomerang_min.js"></script>
    <script>
        BOOMR.init(
        {
            user_ip: '<?php echo $_SERVER['REMOTE_ADDR']; ?>',
            beacon_url: '<?php echo dirname($_SERVER['SCRIPT_NAME']) . '/../bower_components/boomerang/images/image-l.gif'; ?>',
            BW:
            {
                base_url: '<?php echo dirname($_SERVER['SCRIPT_NAME']) . '/../bower_components/boomerang/images/'; ?>'
            }
        });
    </script>
<?php endif; ?>

<script src="../assets/js/jtest.js"></script>