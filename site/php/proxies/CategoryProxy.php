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

    function delete($json)
    {
        $this->model->fromJSON($json);
        return $this->model->softDelete();
    }
}