<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 21/04/2019
 * Time: 06:37
 */

class Transaction extends ORM
{
    public function __construct()
    {
        $this->table = "money_transaction";
        parent::__construct();
    }

    public function getAll($column = null, $account_id = null)
    {
        $query = "SELECT * FROM money_transaction WHERE 
        (account_destiny_id = ? AND type = 'transfer') OR account_origin_id = ?";

        $statement = $this->db->prepare($query);

        $statement->execute(array($account_id, $account_id));

        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }
}