function adjustStyle() {
    var width = 0;
    // get the width.. more cross-browser issues (no need to memorize)
    if (window.innerHeight) {
        width = window.innerWidth;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        width = document.documentElement.clientWidth;
    } else if (document.body) {
        width = document.body.clientWidth;
    }
    // now we should have it
    // **we changed css link instead of changing individual elements' properties**
    if (width < 600) {
        document.getElementById("myCSS").setAttribute("href", "_css/narrow.css");
    } else {
        document.getElementById("myCSS").setAttribute("href", "_css/main.css");
    }
}

// now call it when the window is resized.
window.onresize = function () {
    adjustStyle();
};

// **we got another event in case browser is refreshed on size smaller than 600px**
window.onload = function() {
    adjustStyle();
};