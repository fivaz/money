<?php

/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 22/04/2019
 * Time: 21:36
 */
class Auth
{
    public static function isAuth()
    {
        return isset($_SESSION["user_id"]);
    }

    public static function user()
    {
        $user = new User();
        $user->setAttr("id", $_SESSION["user_id"]);
        $user->setAttr("first_name", $_SESSION["user_first_name"]);
        $user->setAttr("last_name", $_SESSION["user_last_name"]);
        $user->setAttr("email", $_SESSION["user_email"]);
        $user->setAttr("password", $_SESSION["user_password"]);
        return $user;
    }

    public static function login(User $user)
    {
        $_SESSION["user_id"] = $user->getAttr("id");
        $_SESSION["user_first_name"] = $user->getAttr("first_name");
        $_SESSION["user_last_name"] = $user->getAttr("last_name");
        $_SESSION["user_email"] = $user->getAttr("email");
        $_SESSION["user_password"] = $user->getAttr("password");
    }

    public static function id()
    {
        return $_SESSION["user_id"];
    }

    public static function first_name()
    {
        return $_SESSION["user_first_name"];
    }

    public static function last_name()
    {
        return $_SESSION["user_last_name"];
    }

    public static function name()
    {
        return $_SESSION["user_first_name"] . " " . $_SESSION["user_last_name"];
    }

    public static function email()
    {
        return $_SESSION["user_email"];
    }

    public static function password()
    {
        return $_SESSION["user_password"];
    }

    public static function logout()
    {
        session_destroy();
    }
}
