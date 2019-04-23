<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 29/01/2019
 * Time: 21:15
 */
?>

<?php include_once("header.php") ?>

<?php require("navbar.php") ?>

<script>
    const accounts = (<?=$accounts?>);
    const categories = (<?=$categories?>);
    AccountPageBuilder.build(<?=$account?>);
</script>

<?php include_once("footer.php") ?>
