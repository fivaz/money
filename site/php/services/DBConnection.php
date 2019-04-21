<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 30/01/2019
 * Time: 16:47
 */

class DBConnection extends PDO
{
    public function __construct()
    {
        return parent::__construct(DB_DRIVE.":host=".DB_HOST.";port=".DB_PORT.";dbname=".DB_NAME.";charset=".DB_CHARSET, DB_USERNAME, DB_PASSWORD);
    }
}



