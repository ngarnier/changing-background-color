$(document).ready(function () {

    var screenx = $(window).width(); // get window size
    var screeny = $(window).height();

    $("body").mousemove(function (event) { // get mouse position
        var mousex = event.clientX;
        var mousey = event.clientY;

        var red = Math.round(((mousex / screenx) * 155)); // get RGB
        var green = Math.round(((mousey / screeny) * 155));

        $("body").css("background-color", "rgba(" + red + ", " + green + ", 130, 0.7)"); // set body color according the mouse
    });
});