class Parent extends Model {

    constructor() {
        super();
    }

    get children() {
        throw "Error this method should be overridden by its extended class";
    }

    set children(value) {
        throw "Error this method should be overridden by its extended class";
    }

    addChild(child) {
        this.children.push(child);
        this.emit("child added", child);
    }

    removeChild(child) {
        if (this.children.includes(child)) {
            const index = this.children.indexOf(child);
            this.children.splice(index, 1);
            this.emit("children changed");
        } else {
            throw "Error this child has already been removed from this parent";
        }
    }
}