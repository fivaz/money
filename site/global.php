<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 30.01.2019
 * Time: 17:34
 */

include_once("db-config.php");

spl_autoload_register(
    function ($class_name) {
        $directories = glob("site/php/*");
        foreach ($directories as $directory) {
            $path = $directory . "/" . $class_name . ".php";
            if (file_exists($path)) {
                require_once($path);
                return;
            }
        }
        die("class " . $class_name . " not found");
    }
);