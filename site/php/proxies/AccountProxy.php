<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 22/02/2019
 * Time: 16:04
 */

class AccountProxy extends Proxy
{
    public function __construct()
    {
        $this->model = new Account();
    }

    function select($json = null)
    {
        $elements = $this->model->getAll("user_id", Auth::id());
        return json_encode($elements);
    }

    function insert($json)
    {
        $this->model->fromJSON($json);
        $this->model->setAttr("user_id", Auth::id());
        $this->model->create();
        return $this->model->toJSON();
    }

    function update($json)
    {
        $this->model->fromJSON($json);
        $this->model->setAttr("user_id", Auth::id());
        echo $this->model->save();
        return $this->model->toJSON();
    }

    function delete($json)
    {
        $this->model->fromJSON($json);
        $this->model->setAttr("user_id", Auth::id());
        return $this->model->softDelete();
    }
}