<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 21/04/2019
 * Time: 06:34
 */

class Account extends ORM
{
    public function __construct()
    {
        $this->table = "account";
        $this->view = "view_account";
        parent::__construct();
    }

    public function get($id, $forceTable = false)
    {
        if (parent::get($id, $forceTable)) {
            //TODO insert the right balance
            if (!$forceTable)
                $this->setAttr("balance", 0);
            return $this;
        } else
            return null;
    }

    public function getAll($column = null, $user_id = null)
    {
        $accounts = [];
        foreach (parent::getAll($column, $user_id) as $account) {
            $account["balance"] = self::getBalance($account["id"]);
            array_push($accounts, $account);
        }
        return $accounts;
    }

    private static function getBalance($id)
    {
        $transaction = new Transaction();
        $rows = $transaction->getAll(null, $id);

        $balance = 0;
        foreach ($rows as $row) {
            switch ($row["type"]) {
                case "income":
                    $balance += $row["value"];
                    break;
                case "spending":
                    $balance -= $row["value"];
                    break;
                case "transfer":
                    if ($id == $row["account_destiny_id"])
                        $balance += $row['value'];
                    if ($id == $row["account_origin_id"])
                        $balance -= $row["value"];
                    break;
            }
        }
        return number_format((float)$balance, 2, ".", "");
    }
}