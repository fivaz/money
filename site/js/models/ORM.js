class ORM extends EventEmitter {

    toString() {
        return JSON.stringify(this);
    }

    save() {
        DataSync.update(this.constructor.name, this.toString())
            .then(() => this.emit("model edited"));
    }

    create() {
        return DataSync.insert(this.constructor.name, this.toString());
    }

    delete() {
        DataSync.dellete(this.constructor.name, this.toString())
            .then(() => this.emit("remove model"));
    }

    findAll(whereClause = null) {
        return new Promise(resolve => {
            DataSync.select(this.constructor.name, JSON.stringify(whereClause))
                .then(objects => {
                    const models = objects.map(object =>
                        Object.assign(new this.constructor(), object));
                    resolve(models);
                });
        });
    }
}