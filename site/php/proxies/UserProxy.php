<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 22/02/2019
 * Time: 16:04
 */

class UserProxy extends Proxy
{
    public function __construct()
    {
        $this->model = new User();
    }

    //TODO use parent::insert
    function insert($json)
    {
        $this->model->fromJSON($json);
        $email = $this->model->getAttr("email");
        //TODO replace it by errorInfo
        if ($this->model->checkEmailIsUnique($email)) {
            $this->model->create();
            Auth::login($this->model);
            echo "success";
        }
    }
}