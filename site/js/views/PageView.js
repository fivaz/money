class PageView extends View {

    showChild(childView) {
        this.elements.main.appendChild(childView.template());
    }

    clearAll(){
        this.elements.main.innerHTML = "";
    }

    //TODO create a header without d-flex to accept a filter
    pageTemplate() {

        this.elements = {
            template: $$("<div>"),
            header: $$("<header>"),
            main: $$("<main>"),
            footer: $$("<footer>"),
            btnNew: $$("<button>")
        };

        this.elements.header.className = "d-flex justify-content-between";
        this.elements.btnNew.className = "footer-button btn btn-success";

        this.elements.btnNew.textContent = "new child";

        this.elements.btnNew.addEventListener("click", () => this.createChildTemplate());

        this.elements.template.appendChild(this.elements.header);
        this.elements.template.appendChild(this.elements.main);
        this.elements.template.appendChild(this.elements.footer);
        this.elements.footer.appendChild(this.elements.btnNew);

        return this.elements;
    }

    createChildTemplate() {
    }

    update() {
    }
}