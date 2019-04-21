<?php
require_once("site/global.php");

$request = $_SERVER["REQUEST_URI"];

$route = new Router($request);

$route->redirect("", "AccountController", "findAll");
$route->redirect("account", "AccountController", "find");
$route->redirect("categories", "CategoryController", "findAll");
$route->get("server", "site/php/services/server.php");