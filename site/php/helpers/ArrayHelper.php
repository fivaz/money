<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 05/02/2019
 * Time: 07:00
 */

class ArrayHelper
{

    public static function buildInsertData($attributes)
    {
        $data = [];
        foreach ($attributes as $value)
            if ($value)
                array_push($data, $value);

        return $data;
    }

    public static function buildUpdateData($attributes, $primary_keys)
    {
        $data = [];
        foreach ($attributes as $key => $value)
//            TODO if someday I decide to remove the primary keys from the update statement
//            if ($value && !in_array($key, $primary_keys))
            array_push($data, $value);

        array_push($data, $attributes[$primary_keys[0]]);

        return $data;
    }

    public static function buildDeleteData($attributes, $primary_keys)
    {
        $data = [];
        foreach ($primary_keys as $primary_key)
            array_push($data, $attributes[$primary_key]);

        return $data;
    }
}