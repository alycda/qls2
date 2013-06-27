/* Author: YOUR NAME HERE
*/

var $container = $('.pure-g-r');

var viewWidth = $('html').width();

$(document).ready(function() {
    window.mySwipe = Swipe(document.getElementById('slider'));

    $('.left-dock .nav li a, .logo').click(function(e) {
        e.preventDefault()
        var href = $(this).attr("href");

        history.pushState({}, '', href);
        $('body').backstretch('destroy');
        $('body').removeClass().addClass(href.replace('/', ''));
        if (href == '/') $('body').addClass('home');
        $('.content').load(href + " .content>*", function() {
            showTiles()
        })
        $('body.home').backstretch('/images/main-hero_1024.jpg')
    })
    $('.content').width($('html').width() - 375);

    // initialize
    $container.imagesLoaded( function(){
        showTiles()
    });

    $('body.home').backstretch('/images/main-hero_1024.jpg');
});

var timer;
$(window).bind('resize', function(){
    $('.content').width($('html').width() - 375);
    timer && clearTimeout(timer);
    timer = setTimeout(function() {
        $container.masonry('layout');
    }, 500);
});

function showTiles() {
    $('#tiles').css('top', 34);
    $container.masonry({
        columnWidth: '.tile', //must be the base tile width
        itemSelector: '.pure-u-1-8',
        gutterWidth: 0,
        containerStyle: null,
        transitionDuration: 0
    });
    $container.masonry('unbindResize');

}