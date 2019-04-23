/**
 * This function performs the same that $ in jQuery, witch means, it creates a new Node if the parameter is a <tag>
 *     or it searches for one Node if the parameter is a CSS selector
 */
function $$(text) {
    if (text.charAt(0) === '<' && text.charAt(text.length - 1) === '>')
        return document.createElement(text.substring(1, text.length - 1));
    else {
        if (document.querySelectorAll(text).length === 1) {
            let node = document.querySelector(text);
            node.show = () => node.style.display = "block";
            node.hide = () => node.style.display = "none";
            return node;
        } else
            return document.querySelectorAll(text);
    }
}

function get(url) {
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

        xhr.open("GET", url);
        xhr.send();
    });
}

function post(url, json) {
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

        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(json);
    });
}