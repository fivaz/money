class DataSync {
    /**
     * This methods sends a ajax request for the file server.php sending 2 other parameters as path params and sending
     * a Javascript Object as JSON
     * @param model it can be Account, Category or Transaction it will define witch Proxy will be instantiated
     * @param action the action to be perform on the database, it can be select, insert, update or delete
     * @param json the data necessary for the operation, the data to be inserted, the row to be deleted, a where clause, etc.
     * @returns {Promise<any>} it's useful to return a Promise so you can trigger an action after the Promise.then().
     */
    static sync(model, action, json) {
        return new Promise((resolve, reject) => {
            //this node is extremely useful to check if the request was complete for automatically tests
            const ajaxNode = $$(".ajax");
            ajaxNode.value = "waiting";

            const xhr = new XMLHttpRequest();

            xhr.onload = () => {
                try {
                    console.log(xhr.responseText);
                    //if the result is JSON parse to Object
                    resolve(JSON.parse(xhr.responseText));
                } catch (error) {
                    resolve(xhr.responseText);
                }
                ajaxNode.value = "done";
            };
            xhr.onerror = () => reject(xhr.statusText);

            xhr.open("POST", "/money/server/" + model + "/" + action);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(json);
        });
    }

    static select(model, json) {
        return this.sync(model, "select", json);
    }

    static insert(model, json) {
        return this.sync(model, "insert", json);
    }

    static update(model, json) {
        return this.sync(model, "update", json);
    }

    static dellete(model, json) {
        return this.sync(model, "delete", json);
    }
}