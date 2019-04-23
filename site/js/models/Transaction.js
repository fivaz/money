class Transaction extends ORM {

    constructor(...args) {
        super();
        this._type = args[0] || null;
        this._description = args[1] || null;
        this._value = args[2] || null;
        this._date = new Date(args[3]) || null;
        this._account_origin_id = args[4] || null;
        this._account_destiny_id = args[5] || null;
        this._category_id = args[6] || null;
        this._id = args[7] || null;
        this._category = args[8] || null;
        this._filtered = false;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = Number(value);
    }

    get date() {
        return this._date;
    }

    get dateFormattedFR() {
        return formatDateFR(this._date);
    }

    get dateFormattedEN() {
        return formatDateEN(this._date);
    }

    get dateLong() {
        return this._date.getTime();
    }

    set date(value) {
        this._date = new Date(value);
    }

    get account_destiny_id() {
        return this._account_destiny_id;
    }

    set account_destiny_id(value) {
        this._account_destiny_id = value;
    }

    get account_origin_id() {
        return this._account_origin_id;
    }

    set account_origin_id(value) {
        if (this._account_origin_id && this._account_origin_id !== value){
            console.log("emit model moved");
            this.emit("model moved");
        }
        this._account_origin_id = value;
    }

    get category_id() {
        return this._category_id;
    }

    set category_id(value) {
        this._category_id = value;
    }

    //TODO ref
    getCategory() {
        //categories are declared globally
        for (const category of categories) {
            if (category.id === this._category_id)
                return category.name;
        }
    }

    get filtered() {
        return this._filtered;
    }

    set filtered(value) {
        this._filtered = value;
    }
}