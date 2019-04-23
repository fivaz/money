class Category extends ORM{

    constructor(...args) {
        super();
        this._name = args[0];
        this._user_id = args[1];
        this._id = args[2];
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get user_id() {
        return this._user_id;
    }

    set user_id(value) {
        this._user_id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}