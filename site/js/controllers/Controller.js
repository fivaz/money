class Controller {

    constructor(model = null, view = null) {
        this._model = model;
        this._view = view;

        if (view) {
            this.view.on("edit model", (...args) => this.edit(args));

            if (view instanceof PageView) {
                this.view.on("create child", (...args) => this.createChild(args));
                this.model.on("children added", () => this.onCreateChildren());
                this.model.on("child added", (child) => this.onCreateChild(child));
                this.model.on("children changed", () => this.onUpdateChildren());
            }
        }
    }

    get model() {
        return this._model;
    }

    get view() {
        return this._view;
    }

    start() {
        this.load();
        $$(".container").appendChild(this.view.template());
    }

    load(whereClause = null) {
        new this.constructor.childClass().findAll(whereClause).then(children =>
            this.model.children = children);
    }

    onCreateChildren(){
        this.view.update();
        this.showChildren();
        this.model.children.forEach((child) => this.mapChildEvents(child));
    }

    onCreateChild(child){
        this.onUpdateChildren();
        this.mapChildEvents(child);
    }

    mapChildEvents(child) {
        child.on("model edited", () => this.onUpdateChildren());
        child.on("remove model", () => this.model.removeChild(child));
        child.on("model moved", () => this.model.removeChild(child));
    }

    onUpdateChildren(){
        this.view.update();
        this.view.clearAll();
        this.showChildren();
    }

    showChildren() {
        this.model.children.forEach(child =>
            this.view.showChild(this.getChildView(child)));
    }

    getChildView(child) {
        const view = new this.constructor.childViewClass(child);
        new this.constructor.childControllerClass(child, view);

        return view;
    }
    
    createChild(args) {
        const oldChild = new this.constructor.childClass(...args);
        oldChild.create().then(childObj => {
            const newChild = Object.assign(new this.constructor.childClass(), childObj);
            this.model.addChild(newChild);
        });
    }

    //TODO create a Exception Class and use every time I want to print this text
    edit(args) {
        throw "Error this method should be overridden by its extended class";
    }
}
