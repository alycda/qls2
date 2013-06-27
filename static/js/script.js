/* Author: YOUR NAME HERE
*/

var viewWidth = $('html').width();

$(document).ready(function() {
    window.mySwipe = Swipe(document.getElementById('slider'));

    switchContent(window.location.pathname)
    $('.left-dock .nav li a, .logo').click(function(e) {
        e.preventDefault()
        var href = $(this).attr("href");

        history.pushState({}, '', href);

        $('.content').load(href + " .content>*", function() {
            switchContent(href);
        })

    })

});

//var timer;
//$(window).bind('resize', function(){
//    $('.content').width($('html').width() - 375);
//    timer && clearTimeout(timer);
//    timer = setTimeout(function() {
//        $container.masonry('layout');
//    }, 500);
//});

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

function switchContent(href) {
    $('body').removeClass()
    switch(href) {
        case '/':
            $('body').addClass('home');

            var elem = document.getElementById('mySwipe');
            window.mySwipe = Swipe(elem, {
                callback: function(index, element) {
                    $('.slides-pagination a').removeClass('current');
                    $('.slides-pagination a').eq(index).addClass('current');

                    loadPage(index);
                },
                transitionEnd: function(index, element) {

                }
            });

            $('#a').backstretch("/images/slide1.jpg");
            $('#b').backstretch("img/screen3-hero-bg.jpg");
            $('#c').backstretch("img/new-whitehouse.jpg");
            break;
        case '/living':
            $('body').addClass('living');
            break;

        case '/latifah':
            $('body').addClass('latifah');

            var $container = $('.pure-g-r');
            $('.content').width($('html').width() - 375);

            // initialize
            $container.imagesLoaded( function(){
                showTiles()

            });
            break;
    }
}