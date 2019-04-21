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
        $this->table = "money_account";
        $this->view = "money_view_account";
        parent::__construct();
    }

    public function getAll($column = null, $account_id = null)
    {
        $query = "SELECT * FROM {$this->view}";
        if ($column)
            $query .= " WHERE {$column} = ?";

        $statement = $this->db->prepare($query);
        $statement->execute([$account_id]);

        $accounts = $statement->fetchAll(PDO::FETCH_ASSOC);

        $newAccounts = [];
        foreach ($accounts as $account) {
            $account["balance"] = self::getBalance($account["id"]);
            array_push($newAccounts, $account);
        }
        return $newAccounts;
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