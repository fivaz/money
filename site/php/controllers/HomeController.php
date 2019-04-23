<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 22/04/2019
 * Time: 18:27
 */

class HomeController
{
    static function index()
    {
        if (Auth::isAuth())
            AccountController::index();
        else
            require("site/php/views/login.php");
    }
}