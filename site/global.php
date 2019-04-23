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
        $found = false;
        $index = 0;

        while ($index < count($directories) && !$found) {
            $path = $directories[$index] . "/" . $class_name . ".php";
            if (file_exists($path)) {
                $found = true;
                require_once($path);
            }
            $index++;
        }
        if (!$found)
            die("class " . $class_name . " not found");
    }
);