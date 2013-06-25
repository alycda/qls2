/* Author: YOUR NAME HERE
*/

var $container = $('.pure-g-r');

$(document).ready(function() {
    window.mySwipe = Swipe(document.getElementById('slider'));

    // initialize
    $container.imagesLoaded( function(){
        $('#tiles').css('top', 34);
        $container.masonry({
            columnWidth: '.tile', //must be the base tile width
            itemSelector: '.pure-u-1-8',
            gutterWidth: 0,
            containerStyle: null
        });
        $container.masonry('unbindResize');
        onResize()
    });


    $('body.home').backstretch('/images/main-hero_1024.jpg')
});

function onResize() {
    $('.pure-g-r').fadeIn();
    $('.content').width($('html').width() - 375);
    setTimeout(function() {
        $container.masonry('layout');
    }, 100)
}

var timer;
$(window).bind('resize', function(){
    $('.pure-g-r').hide();
    timer && clearTimeout(timer);
    timer = setTimeout(onResize, 100);
});
