class TransactionForm extends View {

    static template() {

        const template = {
            form: $$("<div>"),
            header: $$("<header>"),
            title: $$("<h2>"),
            btnClose: $$("<button>"),
            main: $$("<main>"),
            row1: $$("<div>"),
            lblDescription: $$("<label>"),
            iptDescription: $$("<input>"),
            row2: $$("<div>"),
            col1: $$("<div>"),
            lblType: $$("<label>"),
            slcType: $$("<select>"),
            col2: $$("<div>"),
            lblValue: $$("<label>"),
            iptValue: $$("<input>"),
            row3: $$("<div>"),
            col3: $$("<div>"),
            lblCategory: $$("<label>"),
            slcCategory: $$("<select>"),
            col4: $$("<div>"),
            lblDate: $$("<label>"),
            iptDate: $$("<input>"),
            row4: $$("<div>"),
            col5: $$("<div>"),
            lblAccountOrigin: $$("<label>"),
            slcAccountOrigin: $$("<select>"),
            col6: $$("<div>"),
            lblAccountDestiny: $$("<label>"),
            slcAccountDestiny: $$("<select>"),
            footer: $$("<footer>"),
            btnSubmit: $$("<button>")
        };
        //declaring classes
        template.form.className = "my-modal";

        template.header.className = "d-flex align-items-start";
        template.title.className = "f-1";
        template.btnClose.className = "btn btn-outline-dark";

        template.row1.className = "form-row form-group";
        template.iptDescription.className = "ipt-description form-control";

        template.row2.className = "form-row form-group";
        template.col1.className = "col";
        template.slcType.className = "slc-type form-control";
        template.col2.className = "col";
        template.iptValue.className = "ipt-value form-control";

        template.row3.className = "form-row form-group";
        template.col3.className = "col";
        template.slcCategory.className = "ipt-category form-control";
        template.col4.className = "col";
        template.iptDate.className = "ipt-date form-control";

        template.row4.className = "form-row form-group";
        template.col5.className = "col";
        template.slcAccountOrigin.className = "slc-account_origin form-control";
        template.col6.className = "col";
        template.slcAccountDestiny.className = "slc-account_destiny form-control";

        template.btnSubmit.className = "btn-submit btn-lg btn-block btn-success d-block m-auto";

        //declaring texts and types
        template.btnClose.textContent = "X";
        template.lblDescription.textContent = "description";
        template.lblType.textContent = "type";
        template.lblValue.textContent = "value";
        template.lblCategory.textContent = "category";
        template.lblDate.textContent = "date";
        template.lblAccountOrigin.textContent = "account origin";
        template.lblAccountDestiny.textContent = "account destiny";

        template.iptDate.type = "date";

        template.slcAccountDestiny.disabled = true;

        //declaring specials
        ["spending", "income", "transfer"].forEach((type, key) =>
            template.slcType[key] = new Option(type, type));

        template.slcType.addEventListener("change", () =>
            template.slcAccountDestiny.disabled = (template.slcType.value !== "transfer"));

        template.btnClose.addEventListener("click", () =>
            template.form.parentElement.removeChild(template.form));

        //appending to the DOM
        document.body.appendChild(template.form);

        template.form.appendChild(template.header);
        template.form.appendChild(template.main);
        template.form.appendChild(template.footer);

        template.header.appendChild(template.title);
        template.header.appendChild(template.btnClose);

        template.main.appendChild(template.row1);
        template.main.appendChild(template.row2);
        template.main.appendChild(template.row3);
        template.main.appendChild(template.row4);

        template.row1.appendChild(template.lblDescription);
        template.row1.appendChild(template.iptDescription);

        template.row2.appendChild(template.col1);
        template.row2.appendChild(template.col2);
        template.col1.appendChild(template.lblType);
        template.col1.appendChild(template.slcType);
        template.col2.appendChild(template.lblValue);
        template.col2.appendChild(template.iptValue);

        template.row3.appendChild(template.col3);
        template.row3.appendChild(template.col4);
        template.col3.appendChild(template.lblCategory);
        template.col3.appendChild(template.slcCategory);
        template.col4.appendChild(template.lblDate);
        template.col4.appendChild(template.iptDate);

        template.row4.appendChild(template.col5);
        template.row4.appendChild(template.col6);
        template.col5.appendChild(template.lblAccountOrigin);
        template.col5.appendChild(template.slcAccountOrigin);
        template.col6.appendChild(template.lblAccountDestiny);
        template.col6.appendChild(template.slcAccountDestiny);

        template.footer.appendChild(template.btnSubmit);

        return template;
    }
}