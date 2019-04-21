<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 22/02/2019
 * Time: 15:43
 */

$class = $this->params[0] . "Proxy";
$method = $this->params[1];
$argsJSON = file_get_contents('php://input');

$instance = new $class();
echo $instance->$method($argsJSON);