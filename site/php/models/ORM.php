<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 18/02/2019
 * Time: 16:56
 */

class ORM
{
    protected $db;
    protected $table;
    protected $view;
    protected $attributes = [];
    protected $primary_keys = [];

    public function __construct()
    {
        $this->db = new DBConnection();
        $query = "DESCRIBE {$this->table}";

        $results = $this->db->query($query);

        $columns = $results->fetchAll(PDO::FETCH_ASSOC);

        foreach ($columns as $column) {
            $this->setAttr($column['Field'], null);

            if ($column['Key'] == 'PRI')
                $this->setPK($column['Field']);
        }
    }

    public function getAttr($key)
    {
        return $this->attributes[$key];
    }

    public function setAttr($key, $value)
    {
        $this->attributes[$key] = $value;
    }

    public function getAttrs()
    {
        return $this->attributes;
    }

    public function setAttrs($attributes)
    {
        $this->attributes = $attributes;
    }

    public function getPK($position = 0)
    {
        return $this->primary_keys[$position];
    }

    public function setPK($primary_key)
    {
        array_push($this->primary_keys, $primary_key);
    }

    public function getPKs()
    {
        return $this->primary_keys;
    }

    public function setPKs($primary_keys)
    {
        $this->primary_keys = $primary_keys;
    }

    private function getView()
    {
        if ($this->view)
            return $this->view;
        else
            return $this->table;
    }

    public function fromJSON($json)
    {
        $assoc_array = json_decode($json, true);
        foreach ($this->attributes as $key => $value)
            if (isset($assoc_array['_' . $key]))
                $this->setAttr($key, $assoc_array['_' . $key]);
    }

    public function toJSON()
    {
        return json_encode($this->getAttrs());
    }

    //CRUD
    //CREATE
    public function create()
    {
        $columns = SQLHelper::buildInsertColumns($this->getAttrs());
        $values = SQLHelper::buildInsertValues($this->getAttrs());

        $query = "INSERT INTO {$this->table} {$columns} VALUES {$values}";

        $statement = $this->db->prepare($query);

        $data = ArrayHelper::buildInsertData($this->getAttrs());

        $result = $statement->execute($data);

        if ($result) {
            $id = $this->db->lastInsertId();
            $this->get($id);
        } else
            return $statement->errorInfo();
    }

    //READ
    public function get($id)
    {
        $query = "SELECT * FROM {$this->getView()} WHERE {$this->getPK()} = ?";

        $statement = $this->db->prepare($query);
        $statement->execute([$id]);

        $row = $statement->fetch(PDO::FETCH_ASSOC);

        if ($row) {
            $this->setAttrs($row);
            return $this;
        } else
            return null;
    }

    public function getAll($column = null, $account_id = null)
    {
        $query = "SELECT * FROM {$this->getView()}";
        if ($column)
            $query .= " WHERE {$column} = ?";

        $statement = $this->db->prepare($query);
        $statement->execute([$account_id]);

        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    //UPDATE
    public function save()
    {
        $columnsAndValues = SQLHelper::buildUpdate($this->getAttrs());

        $query = "UPDATE {$this->table} SET {$columnsAndValues} WHERE {$this->getPK()} = ?";

        $statement = $this->db->prepare($query);

        $data = ArrayHelper::buildUpdateData($this->getAttrs(), $this->getPKs());

        $result = $statement->execute($data);

        //TODO find a better way to perform this if
        if ($result)
            return 1;
        else
            return $statement->errorInfo();
    }

    //DELETE
    public function delete()
    {
        $columnsAndValues = SQLHelper::buildDelete($this->getPKs());

        $query = "DELETE FROM {$this->table} WHERE {$columnsAndValues}";

        $statement = $this->db->prepare($query);

        $data = ArrayHelper::buildDeleteData($this->getAttrs(), $this->getPKs());

        $result = $statement->execute($data);

        //TODO find a better way to perform this if
        if ($result)
            return 1;
        else
            return $statement->errorInfo();
    }

    public function softDelete()
    {
        $this->setAttr('isArchived', 1);

        return $this->save();
    }
}