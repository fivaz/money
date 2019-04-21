<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 23/02/2019
 * Time: 01:03
 */

interface Controller
{
    static function findAll();

    static function find($params);
}