<?php
require_once("site/global.php");

//check auth
session_start();

//get the uri
$request = $_SERVER["REQUEST_URI"];

$route = new Router($request);

$route->get("/register", "AuthController", "register");
$route->get("/login", "AuthController", "login");
$route->get("/", "HomeController", "index");
$route->get("/home", "HomeController", "index");
$route->getAuth("/logout", "AuthController", "logout");
$route->getAuth("/accounts", "AccountController", "index");
$route->getAuth("/account", "AccountController", "get");
$route->getAuth("/categories", "CategoryController", "index");

$route->postGuest("/server", "User", "insert");
$route->post("/server");
