<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 21/04/2019
 * Time: 06:12
 */

class Category extends ORM
{
    public function __construct()
    {
        $this->table = "category";
        $this->view = "view_category";
        parent::__construct();
    }
}