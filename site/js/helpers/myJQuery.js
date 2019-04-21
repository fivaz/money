/**
 * This function performs the same that $ in jQuery, witch means, it creates a new Node if the parameter is a <tag>
 *     or it searches for one Node if the parameter is a CSS selector
*/
function $$(text) {
    if (text.charAt(0) === '<' && text.charAt(text.length - 1) === '>')
        return document.createElement(text.substring(1, text.length - 1));
    else {
        if (document.querySelectorAll(text).length === 1)
            return document.querySelector(text);
        else
            return document.querySelectorAll(text);
    }
}