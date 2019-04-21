<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 20/04/2019
 * Time: 19:09
 */

class Router
{
    private $uri;
    private $params;

    public function __construct($request)
    {
        $request = substr($request, 7, strlen($request));
        $request = explode("/", $request);

        $this->uri = array_shift($request);
        $this->params = $request;
    }

    public function get($route, $file)
    {
        if ($route == $this->uri)
            require($file);
    }

    public function redirect($route, $controller, $method)
    {
        if ($route == $this->uri) {
            $instance = new $controller();
            $instance->$method($this->params);
        }
    }
}