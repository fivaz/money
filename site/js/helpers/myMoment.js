function digit2(number) {
    return ("0" + number).slice(-2);
}

function now() {
    const date = new Date();
    return formatDateEN(date)
}

function formatDateEN(date) {
    return date.getFullYear() + "-" + digit2(date.getMonth() + 1) + "-" + digit2(date.getDate());
}

function formatDateFR(date) {
    return digit2(date.getDate()) + "/" + digit2(date.getMonth() + 1) + "/" + date.getFullYear();
}

//TODO try to use this later
/*
function buildDate(date) {
    let date10 = date.substring(0, 10);
    let arrayDate = date10.split('-');
    let arrayFixed = arrayDate.map((item, index) => item - index % 2);
    return new Date(...arrayFixed);
}
*/

function thisMonth() {
    return new Date().getMonth();
}

function thisYear() {
    return new Date().getFullYear();
}

function getLastDate(year, month) {
    return new Date(year, month + 1, 0);
}

function getFirstDate(year, month) {
    return new Date(year, month, 1);
}



