<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 30.01.2019
 * Time: 17:33
 */

define("DB_DRIVE", "mysql");
define("DB_PORT", "3306");
define("DB_CHARSET", "utf8");
//DIR contains the name of the source directory with a slash like this: source/ or if none /
define("DIR", substr($_SERVER['SCRIPT_NAME'], 0, strlen($_SERVER['SCRIPT_NAME']) - strlen("routes.php")));

//LOCAL
define("DB_HOST", "localhost");
define("DB_NAME", "money");
define("DB_USERNAME", "root");
define("DB_PASSWORD", "");