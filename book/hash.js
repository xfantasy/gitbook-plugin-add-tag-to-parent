require(["gitbook"], function (gitbook) {
    gitbook.events.bind("page.change", function () {

        // ensure  exist parent window
        var parentWindow = window.parent;
        if (parentWindow == window) return;

        // ensure exist last path is not empty
        var path = document.location.pathname;
        if (!path) return;
        var paths = path.split('/');
        var lastPath = paths[paths.length - 1];

        if (!lastPath) return;

        // update parent window location hash key;
        parentWindow.location.href = parentWindow.location.origin + parentWindow.location.pathname + '#' + lastPath;
    });
});