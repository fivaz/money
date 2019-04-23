class CategoriesPageView extends PageView {

    template() {

        this.elements = super.pageTemplate("New Category");

        this.elements.title = $$("<h2>");
        this.elements.title.textContent = "Categories";

        this.elements.header.append(this.elements.title);

        return this.elements.template;
    }

    createChildTemplate() {

        const template = CategoryForm.template();

        template.title.textContent = "create category";
        template.btnSubmit.textContent = "create";

        template.btnSubmit.addEventListener("click", () => {
            this.emit("create child", template.iptName.value);
            template.form.parentElement.removeChild(template.form);
        });
    }
}