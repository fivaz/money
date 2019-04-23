class Account extends Parent {

    constructor(...args) {
        super();
        this._name = args[0] || null;
        this._user_id = args[1] || null;
        this._id = args[2] || null;
        this._balance = args[3] || null;
        this._transactions = [];
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

    get user_id() {
        return this._user_id;
    }

    set user_id(value) {
        this._user_id = value;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        this._balance = Number(value);
    }

    get children() {
        return this._transactions;
    }

    set children(value) {
        this._transactions = value;
        this.emit("children added");
    }

    getBalanceFiltered() {
        const reducer = (total, transaction) => {
            if (transaction.filtered)
                return total;
            else
                return total + this.getValue(transaction);
        };
        return this._transactions.reduce(reducer, 0).toFixed(2);
    }

    getFullBalance() {
        const reducer = (total, transaction) => total + this.getValue(transaction);

        return this._transactions.reduce(reducer, 0).toFixed(2);
    }

    filterMonths(month, year) {
        const firstDate = getFirstDate(year, month).getTime();
        const lastDate = getLastDate(year, month).getTime();

        for (const transaction of this._transactions) {
            if (transaction.dateLong < firstDate || transaction.dateLong > lastDate)
                transaction.filtered = true;
        }
    }

    clearFilter() {
        this._transactions.forEach((transaction) => transaction.filtered = false);
    }

    getValue(transaction) {
        switch (transaction.type) {
            case "income":
                return transaction.value;
            case "spending":
                return -1 * transaction.value;
            case "transfer":
                if (this.id === transaction.account_destiny_id)
                    return transaction.value;
                if (this.id === transaction.account_origin_id)
                    return -1 * transaction.value;
        }
    }

    orderChildren() {
        this.children.sort((a, b) => b.dateLong - a.dateLong);
    }

    addChild(child) {
        this.children.push(child);
        this.orderChildren();
        this.emit("child added", child);
    }
}