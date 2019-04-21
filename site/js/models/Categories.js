class Categories extends Parent {

    constructor() {
        super();
        this._categories = [];
    }

    get children() {
        return this._categories;
    }

    set children(value) {
        this._categories = value;
        this.emit('children added');
    }
}