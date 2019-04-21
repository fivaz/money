class PageBuilder {

    static build(object, Model, View, Controller) {
        document.addEventListener("DOMContentLoaded", () => {

            const model = Object.assign(new Model(), object);

            const view = new View(model);

            const controller = new Controller(model, view);

            controller.start();
        });
    }
}
