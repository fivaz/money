class View extends EventEmitter{

    constructor(model) {
        super();
        this.model = model;
        this.elements = null;
    }

    template(){
        throw "Error this method should be overridden by its extended class";
    }
}