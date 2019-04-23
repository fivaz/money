class TransactionView extends RowView {

    template() {
        this.elements = this.templateRow();

        this.elements.date = $$("<span>");
        this.elements.category = $$("<span>");
        this.elements.description = $$("<span>");
        this.elements.value = $$("<span>");

        this.elements.date.className = "date f-1";
        this.elements.category.className = "description f-2";
        this.elements.description.className = "description f-5";
        this.elements.value.className = "value f-1";

        this.update();

        this.elements.main.appendChild(this.elements.date);
        this.elements.main.appendChild(this.elements.category);
        this.elements.main.appendChild(this.elements.description);
        this.elements.main.appendChild(this.elements.value);

        return this.elements.row;
    }

    update() {
        this.elements.row.className = "row align-items-center clr-" + this.model.type;

        this.elements.date.textContent = this.model.dateFormattedFR;
        this.elements.category.textContent = this.model.getCategory();
        this.elements.description.textContent = this.model.description;
        this.elements.value.textContent = this.model.value.toFixed(2);
    }

    editTemplate() {
        let template = TransactionForm.template();

        template.title.textContent = "edit transaction";
        template.btnSubmit.textContent = "edit";
        template.iptDescription.value = this.model.description;
        template.iptValue.value = this.model.value;
        template.iptDate.value = this.model.dateFormattedEN;

        //TODO use enum
        ["spending", "income", "transfer"].forEach((type, key) =>
            template.slcType[key] = new Option(type, type, null, type === this.model.type));

        accounts.forEach((account, key) => {
            template.slcAccountOrigin[key] = new Option(account.name, account.id, false,
                account.id === this.model.account_origin_id);
            template.slcAccountDestiny[key] = new Option(account.name, account.id, false,
                account.id === this.model.account_destiny_id);
        });
        categories.forEach((category, key) => {
            template.slcCategory[key] = new Option(category.name, category.id, false,
                category.id === this.model.category_id);
        });

        template.btnSubmit.addEventListener("click", () => {
            this.emit("edit model",
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

    confirmDelete() {
        this.confirmTemplateDelete("transaction");
    }
}
