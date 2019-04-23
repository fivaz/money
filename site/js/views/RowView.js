class RowView extends View {

    templateRow() {

        const elements = {
            row: $$("<div>"),
            main: $$("<div>"),
            aside: $$("<aside>"),
            btnEdit: $$("<button>"),
            btnDel: $$("<button>"),
            icnDel: $$("<i>"),
            icnEdit: $$("<i>")
        };

        elements.row.className = "row align-items-center";
        elements.main.className = "row-main";
        elements.aside.className = "row-aside";
        elements.btnEdit.className = "btn-edit btn btn-primary mr-3";
        elements.icnEdit.className = "fa fa-pencil-square-o";
        elements.btnDel.className = "btn-delete btn btn-danger mr-3";
        elements.icnDel.className = "fa fa-trash-o";

        elements.btnEdit.addEventListener("click", () => this.editTemplate());
        elements.btnDel.addEventListener("click", () => this.confirmDelete());

        elements.row.appendChild(elements.main);
        elements.row.appendChild(elements.aside);
        elements.aside.appendChild(elements.btnEdit);
        elements.btnEdit.appendChild(elements.icnEdit);
        elements.aside.appendChild(elements.btnDel);
        elements.btnDel.appendChild(elements.icnDel);

        return elements;
    }

    static confirmTemplate() {

        const template = {
            container: $$("<div>"),
            header: $$("<header>"),
            title: $$("<h2>"),
            main: $$("<main>"),
            message: $$("<p>"),
            footer: $$("<footer>"),
            btnYes: $$("<button>"),
            btnNo: $$("<button>")
        };

        template.container.className = "my-modal";

        template.title.className = "text-center";

        template.footer.className = "d-flex justify-content-around";

        template.btnYes.className = "btn btn-success";
        template.btnNo.className = "btn btn-danger";

        template.btnYes.textContent = "Yes";
        template.btnNo.textContent = "No";
        template.btnNo.addEventListener("click", () =>
            template.container.parentElement.removeChild(template.container));

        template.btnYes.addEventListener("click", () =>
            template.container.parentElement.removeChild(template.container));

        document.body.appendChild(template.container);
        template.container.appendChild(template.header);
        template.container.appendChild(template.main);
        template.container.appendChild(template.footer);
        template.header.appendChild(template.title);
        template.main.appendChild(template.message);
        template.footer.appendChild(template.btnYes);
        template.footer.appendChild(template.btnNo);

        return template;
    }

    confirmTemplateDelete(context) {
        const template = RowView.confirmTemplate();

        template.title.textContent = "Delete " + context;
        template.message.textContent = "Are you sure you want to " + context + " this account?";
        template.btnYes.addEventListener("click", () => this.model.delete());
    }

    update() {
        throw "Error this method should be overridden by its extended class";
    }
}