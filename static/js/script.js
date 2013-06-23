/* Author: YOUR NAME HERE
*/

$(document).ready(function() {
    window.mySwipe = Swipe(document.getElementById('slider'));

    var $container = $('#tiles');
    // initialize
    $container.imagesLoaded( function(){
        $('#tiles').css('top', 0);
        $container.masonry({
            columnWidth: 1,
            itemSelector: '.tile'
        });
    });

    $container.masonry('unbindResize');

    $(window).resize(function() {
        $('.content').width($('html').width() - 400)
    })

});