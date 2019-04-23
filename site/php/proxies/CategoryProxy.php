<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 22/02/2019
 * Time: 16:04
 */

class CategoryProxy extends Proxy
{
    public function __construct()
    {
        $this->model = new Category();
    }

    function select($json = null)
    {
        $elements = $this->model->getAll("user_id", Auth::id());
        return json_encode($elements);
    }

    function insert($json)
    {
        //TODO try to use parent here
        $this->model->fromJSON($json);
        $this->model->setAttr("user_id", Auth::id());
        echo $this->model->create();
        return $this->model->toJSON();
    }

    function delete($json)
    {//TODO try to use parent here
        $this->model->fromJSON($json);
        $this->model->setAttr("user_id", Auth::id());
        return $this->model->softDelete();
    }
}