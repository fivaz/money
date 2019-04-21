class CategoryForm extends View{

    static template() {

        const template = {
            form: $$("<div>"),
            header: $$("<header>"),
            title: $$("<h2>"),
            btnClose: $$("<button>"),
            main: $$("<main>"),
            lblName: $$("<label>"),
            iptName: $$("<input>"),
            footer: $$("<footer>"),
            btnSubmit: $$("<button>")
        };

        template.form.className = "my-modal";

        template.header.className = "d-flex align-items-start";
        template.title.className = "f-1";
        template.btnClose.className = "btn btn-outline-dark";

        template.iptName.className = "form-control form-group";

        template.btnSubmit.className = "btn-submit btn-lg btn-block btn-success d-block m-auto";

        template.iptName.placeholder = "name";

        template.lblName.textContent = "name";
        template.btnClose.textContent = "X";

        template.btnClose.addEventListener("click", () =>
            template.form.parentElement.removeChild(template.form));

        document.body.appendChild(template.form);
        template.form.appendChild(template.header);
        template.form.appendChild(template.main);
        template.form.appendChild(template.footer);
        template.header.appendChild(template.title);
        template.header.appendChild(template.btnClose);
        template.main.appendChild(template.lblName);
        template.main.appendChild(template.iptName);
        template.footer.appendChild(template.btnSubmit);

        return template;
    }
}