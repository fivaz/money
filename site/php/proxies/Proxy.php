<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 22/02/2019
 * Time: 16:04
 */

class Proxy
{
    /**
     * @var ORM;
     */
    protected $model;

    function select($json = null)
    {
        $elements = $this->model->getAll();
        return json_encode($elements);
    }

    function insert($json)
    {
        $this->model->fromJSON($json);
        $this->model->create();

        return $this->model->toJSON();
    }

    function update($json)
    {
        $this->model->fromJSON($json);
        $this->model->save();
        return $this->model->toJSON();
    }

    function delete($json)
    {
        $this->model->fromJSON($json);
        return $this->model->delete();
    }
}