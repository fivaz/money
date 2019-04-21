class AccountRowView extends RowView {

    template() {

        this.elements = this.templateRow();

        this.elements.name = $$("<span>");
        this.elements.balance = $$("<span>");

        this.elements.row.className += " clr-account";
        this.elements.name.className = "name f-9";
        this.elements.balance.className = "balance f-1";

        this.update();

        this.elements.main.addEventListener("click", () =>
            window.location.href = "account/" + this.model.id);

        this.elements.main.appendChild(this.elements.name);
        this.elements.main.appendChild(this.elements.balance);

        return this.elements.row;
    }

    update() {
        this.elements.name.textContent = this.model.name;
        this.elements.balance.textContent = this.model.balance.toFixed(2);
    }

    editTemplate() {

        const template = AccountForm.template();

        template.title.textContent = "edit account";
        template.btnSubmit.textContent = "edit";

        template.iptName.value = this.model.name;

        template.btnSubmit.addEventListener("click", () => {

            this.emit("edit model", template.iptName.value);

            template.form.parentElement.removeChild(template.form);
        });

    }

    confirmDelete() {
        this.confirmTemplateDelete("account");
    }
}