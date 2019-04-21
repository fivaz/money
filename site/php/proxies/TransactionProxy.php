<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 22/02/2019
 * Time: 16:04
 */

class TransactionProxy extends Proxy
{
    public function __construct()
    {
        $this->model = new Transaction();
    }

    function select($json = null)
    {
        $whereClause = json_decode($json, true);
        $transactions = $this->model->getAll(null, $whereClause['account_id']);

        return json_encode($transactions);
    }

}