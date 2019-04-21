class Category extends Model{

    constructor(...args) {
        super();
        this._name = args[0];

        this._id = args[1];
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}