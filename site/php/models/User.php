<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 21/04/2019
 * Time: 06:12
 */

class User extends ORM
{
    public function __construct()
    {
        $this->table = "user";
        parent::__construct();
    }

    public function checkEmailIsUnique($email)
    {
        $query = "SELECT * FROM {$this->table} WHERE email = ?";
        $statement = $this->db->prepare($query);
        $statement->execute([$email]);
        return $statement->rowCount() == 0;
    }

    public function getByLogin($email, $password)
    {
        $query = "SELECT * FROM {$this->table} WHERE email = ? AND password = ?";
        $statement = $this->db->prepare($query);
        $statement->execute([$email, $password]);
        if ($statement->rowCount() == 1) {
            $row = $statement->fetch(PDO::FETCH_ASSOC);
            $this->setAttrs($row);
            return $this;
        } else
            return null;
    }
}