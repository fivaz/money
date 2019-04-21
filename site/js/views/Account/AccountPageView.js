class AccountPageView extends PageView {

    constructor(model) {
        super(model);
    }

    template() {

        this.addToNavBar();
        this.elements = this.pageTemplate();

        this.elements.header.className = "";

        this.addHeaderInfo();
        this.addFilterBar();

        this.update();

        return this.elements.template;
    }

    /**
     * this method adds the name of the account in the navbar
     */
    addToNavBar() {
        const link = $$("<a>");
        link.className = "nav-item nav-link";
        link.href = "/money/account/" + this.model.id;
        link.textContent = this.model.name;
        $$(".navbar-nav").appendChild(link);
    }

    addFilterBar() {
        this.elements.filterBar = $$("<div>");

        this.elements.fckThisMonth = $$("<div>");
        this.elements.cbxThisMonth = $$("<input>");
        this.elements.lblThisMonth = $$("<label>");
        this.elements.filtered_balance = $$("<h2>");

        this.elements.fckThisMonth.className = "form-check";
        this.elements.cbxThisMonth.className = "form-check-input";
        this.elements.lblThisMonth.className = "form-check-label";

        this.elements.lblThisMonth.textContent = "this month only";
        this.elements.lblThisMonth.for = "thisMonth";
        this.elements.cbxThisMonth.for = "thisMonth";
        this.elements.cbxThisMonth.type = "checkbox";

        this.elements.cbxThisMonth.addEventListener("change",
            () => this.toggleFilter());

        this.elements.header.appendChild(this.elements.filterBar);
        this.elements.filterBar.appendChild(this.elements.fckThisMonth);
        this.elements.filterBar.appendChild(this.elements.cbxThisMonth);
        this.elements.filterBar.appendChild(this.elements.lblThisMonth);
        this.elements.filterBar.appendChild(this.elements.filtered_balance);
    }

    toggleFilter() {
        if (this.elements.cbxThisMonth.checked)
            this.emit("filter by date", thisMonth(), thisYear());
        else
            this.emit("clear filter");
    }

    /**
     * this method creates the header with the name and the total
     */
    addHeaderInfo() {
        this.elements.headerInfo = $$("<div>");
        this.elements.name = $$("<h2>");
        this.elements.initial_balance = $$("<h2>");

        this.elements.headerInfo.className = "d-flex justify-content-between";

        this.elements.header.appendChild(this.elements.headerInfo);
        this.elements.headerInfo.appendChild(this.elements.name);
        this.elements.headerInfo.appendChild(this.elements.initial_balance);
    }

    /**
     * This method updates the data shown in the the header of the page based on the model's data
     */
    update() {
        this.updateHeader();
    };

    updateHeader() {
        this.elements.name.textContent = this.model.name;
        this.elements.initial_balance.textContent = this.model.getFullBalance();
        this.elements.filtered_balance.textContent = this.model.getBalanceFiltered();
    };

    createChildTemplate() {

        let template = TransactionForm.template();

        template.title.textContent = "create transaction";
        template.btnSubmit.textContent = "create";

        template.iptDate.value = now();

        accounts.forEach((account, key) => {
            template.slcAccountOrigin[key] = new Option(account.name, account.id, false,
                account.id === this.model.id);

            template.slcAccountDestiny[key] = new Option(account.name, account.id);
        });

        categories.forEach((category, key) => {
            template.slcCategory[key] = new Option(category.name, category.id);
        });

        template.btnSubmit.addEventListener("click", () => {

            this.emit("create child",
                template.slcType.value,
                template.iptDescription.value,
                template.iptValue.value,
                template.iptDate.value,
                template.slcAccountOrigin.value,
                template.slcAccountDestiny.value,
                template.slcCategory.value
            );
            template.form.parentElement.removeChild(template.form);
        });
    }
}