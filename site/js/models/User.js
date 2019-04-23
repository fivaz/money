class User extends ORM{

    constructor(...args) {
        super();
        this._first_name = args[0];
        this._last_name = args[1];
        this._email = args[2];
        this._password = args[3];
        this._id = args[4];
    }

    get first_name() {
        return this._first_name;
    }

    set first_name(value) {
        this._first_name = value;
    }

    get last_name() {
        return this._last_name;
    }

    set last_name(value) {
        this._last_name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
}