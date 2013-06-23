/* Author: YOUR NAME HERE
*/

$(document).ready(function() {
    window.mySwipe = Swipe(document.getElementById('slider'));

    var $container = $('#tiles');
    // initialize
    $container.masonry({
        columnWidth: 1,
        itemSelector: '.tile'
    });

    $container.masonry('unbindResize');

    $container.masonry('reloadItems');

    $('#tiles').css('top', 0);
});