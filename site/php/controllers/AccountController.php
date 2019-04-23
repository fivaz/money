<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 18/02/2019
 * Time: 15:46
 */

class AccountController
{
    static function index()
    {
        require("site/php/views/accounts.php");
    }

    static function get($params = null)
    {
        $accountORM = new Account();

        $id = $params[0];
        if (!$accountORM->get($id))
            die("No account found with id: " . $id);

        $account = $accountORM->toJSON();
        $accounts = json_encode($accountORM->getAll("user_id", Auth::id()));

        $category = new Category();
        $categories = json_encode($category->getAll("user_id", Auth::id()));

        require("site/php/views/account.php");
    }
}