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

    public function __construct($fullRequest)
    {
        //remove the source directory from the request uri
        $request = substr($fullRequest, strlen(DIR), strlen($fullRequest));
        //create a array with the elements of the request
        $elements = explode("/", $request);
        //the first element with represents is the uri with a slash before it
        $this->uri = "/" . $elements[0];
        //remove the first element from the request
        array_shift($elements);
        //the rest of the elements are the parameters
        $this->params = $elements;
    }

    public function post($route)
    {
        if ($route == $this->uri) {
            if (Auth::isAuth()) {
                $class = $this->params[0] . "Proxy";
                $method = $this->params[1];
                $argsJSON = file_get_contents('php://input');

                $instance = new $class();
                echo $instance->$method($argsJSON);
            }
        }
    }

    public function postGuest($route, $model, $method)
    {
        if ($route == $this->uri && $model == $this->params[0] && $method == $this->params[1]) {
            $class = $this->params[0] . "Proxy";
            $method = $this->params[1];
            $argsJSON = file_get_contents('php://input');
            $instance = new $class();
            echo $instance->$method($argsJSON);
        }
    }

    public function getAuth($route, $controller, $method)
    {
        if ($route == $this->uri) {
            if (Auth::isAuth()) {
                $instance = new $controller();
                $instance->$method($this->params);
            } else
                header("Location: home");
        }
    }

    public function get($route, $controller, $method)
    {
        if ($route == $this->uri) {
            $instance = new $controller();
            $instance->$method($this->params);
        }
    }
}