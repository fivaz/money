class HomePageView extends PageView {

    template() {

        this.elements = this.pageTemplate();
        this.elements.title = $$("<h2>");
        this.elements.total = $$("<h2>");
        this.elements.title.textContent = "Accounts";

        this.elements.header.appendChild(this.elements.title);
        this.elements.header.appendChild(this.elements.total);

        this.update();

        return this.elements.template;
    }

    update() {
        this.elements.total.textContent = this.model.totalFixed();
    }

    createChildTemplate() {

        const template = AccountForm.template();

        template.title.textContent = "create account";
        template.btnSubmit.textContent = "create";

        template.btnSubmit.addEventListener("click", () => {
            this.emit("create child", template.iptName.value);
            template.form.parentElement.removeChild(template.form);
        });
    }
}