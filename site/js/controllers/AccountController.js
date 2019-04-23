class AccountController extends Controller {

    constructor(model = null, view = null) {
        super(model, view);

        if (view) {
            this.view.on("filter by date", (month, year) => this.filterMonths(month, year));
            this.view.on("clear filter", () => this.clearFilter());
        }
    }

    static get childClass() {
        return Transaction;
    }

    static get childControllerClass() {
        return TransactionController;
    }

    static get childViewClass() {
        return TransactionView;
    }

    //TODO put this in the view
    showChildren() {
        this.view.clearAll();
        let previousMonth = 12;
        this.model.children.forEach(transaction => {
            if (transaction.filtered === false) {
                if (previousMonth > transaction.date.getMonth() + 1) {
                    previousMonth = transaction.date.getMonth() + 1;
                    const month = $$("<span>");
                    month.textContent = getMonthTxt(previousMonth);
                    this.view.elements.main.appendChild(month);
                }
                this.view.showChild(this.getChildView(transaction));
            }
        });
    }

    edit(elements) {
        this.model.name = elements[0];
        this.model.save();
    }

    load() {
        super.load({account_id: this.model.id});
    }

    filterMonths(month, year) {
        this.model.filterMonths(month, year);
        this.showChildren();
        this.view.update();
    }

    clearFilter() {
        this.model.clearFilter();
        this.showChildren();
        this.view.update();
    }
}