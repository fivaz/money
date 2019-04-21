class CategoryRowView extends RowView {

    template() {

        this.elements = this.templateRow();

        this.elements.name = $$("<span>");

        this.elements.row.className += " clr-account";
        this.elements.name.className = "name f-10";

        this.update();

        this.elements.main.appendChild(this.elements.name);

        return this.elements.row;
    }

    update() {
        this.elements.name.textContent = this.model.name;
    }

    editTemplate() {

        const template = CategoryForm.template();

        template.title.textContent = "edit category";
        template.btnSubmit.textContent = "edit";

        template.iptName.value = this.model.name;

        template.btnSubmit.addEventListener("click", () => {
            this.emit("edit model", template.iptName.value);
            template.form.parentElement.removeChild(template.form);
        });
    }

    confirmDelete() {
        this.confirmTemplateDelete("category");
    }
}