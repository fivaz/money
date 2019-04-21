<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 18/02/2019
 * Time: 15:46
 */

class CategoryController implements Controller
{
    static function findAll()
    {
        require("site/php/views/categories.php");
    }

    static function find($params)
    {
    }
}