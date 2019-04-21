class Home extends Parent {

    constructor() {
        super();
        this._accounts = [];
    }

    get children() {
        return this._accounts;
    }

    set children(value) {
        this._accounts = value;
        this.emit("children added");
    }

    totalFixed(){
        return this.getTotal().toFixed(2);
    }

    getTotal() {
        return this._accounts.reduce((total, account) =>
            total + account.balance, 0);
    }
}