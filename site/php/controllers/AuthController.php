<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 22/04/2019
 * Time: 19:11
 */

class AuthController
{
    public function register()
    {
        require("site/php/views/register.php");
    }

    public function login($params)
    {
        $email = $params[0];
        $password = $params[1];

        $user = new User();
        $result = $user->getByLogin($email, $password);
        if ($result) {
            Auth::login($user);
            echo "success";
        }
    }

    public function logout(){
        Auth::logout();
        header("Location: home");
    }
}