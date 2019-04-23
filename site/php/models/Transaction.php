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
        $this->table = "transaction";
        parent::__construct();
    }

    public function getAll($column = null, $value = null)
    {
        $query = "SELECT * FROM {$this->table} WHERE 
        (account_destiny_id = ? AND type = 'transfer') OR account_origin_id = ?";

        $statement = $this->db->prepare($query);

        $statement->execute([$value, $value]);

        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function fromJSON($json)
    {
        $assoc_array = json_decode($json, true);
        $this->get($assoc_array['_id'], true);
        foreach ($this->attributes as $key => $value)
            if (isset($assoc_array['_' . $key])) {
                if ($assoc_array['_date'])
                    $assoc_array['_date'] = substr($assoc_array['_date'], 0, 10);
                $this->setAttr($key, $assoc_array['_' . $key]);
            }
    }
}