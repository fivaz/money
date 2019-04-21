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
        $this->table = "money_category";
        $this->view = "money_view_category";
        parent::__construct();
    }
}