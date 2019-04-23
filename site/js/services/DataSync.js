class DataSync {
    /**
     * This methods sends a ajax post request sending 2 other parameters as path params and sending
     * a Javascript Object as JSON
     * @param model it can be Account, Category or Transaction it will define witch Proxy will be instantiated
     * @param json the data necessary for the operation, the data to be inserted, the row to be deleted, a where clause, etc.
     * @returns {Promise} it's useful to return a Promise so you can trigger an action after the Promise.then().
     */
    static select(model, json) {
        return post("server/" + model + "/select", json);
    }

    static insert(model, json) {
        return post("server/" + model + "/insert", json);
    }

    static update(model, json) {
        return post("server/" + model + "/update", json);
    }

    static dellete(model, json) {
        return post("server/" + model + "/delete", json);
    }
}