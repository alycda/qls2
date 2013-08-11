/* Author: YOUR NAME HERE
*/

var viewWidth = $('html').width();

$(document).ready(function() {
    window.mySwipe = Swipe(document.getElementById('mySwipe'), {
        auto: 5000,
        transitionEnd: function(index, element) {
            // re-hide all other elements so the transition will work
            $(element).siblings('.img').find('.info-bg').fadeOut(10);
            // call the transition on the current element
            $(element).find('.info-bg').fadeIn('slow');
        }
        // transitionEnd: function(index, element) {}
    });

    $('#mySwipe #a .info-bg').fadeIn('slow');

    switchContent(window.location.pathname)
    $('.left-dock .nav li a, .logo').click(function(e) {
        e.preventDefault()
        var href = $(this).attr("href");

        history.pushState({}, '', href);

        $('.content').load(href + " .content>*", function() {
            switchContent(href);
        })

    })


    $.ajax({
        url: "http://getjsonp.herokuapp.com/gettweets?callback=func",
        type: "GET",
        cache: true,
        dataType: 'jsonp',
        success: function(data) {

            console.log(data)

        }
    });

});

function func(data) {
    console.log('func')

    console.log(data)

}
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
            $('#b').backstretch("/images/slide2.jpg");
            $('#c').backstretch("/images/slide3.jpg");
            $('#d').backstretch("/images/slide4.jpg");
            break;
        case '/living':
            $('body').addClass('living');
            break;
        case '/loving':
            $('body').addClass('loving');
            break;
        case '/learning':
            $('body').addClass('learning');
            break;
        case '/laughing':
            $('body').addClass('laughing');
            break;

        case '/latifah':
            $('body').addClass('latifah');
            $('.content').width($('html').width() - 375);

            var $container = $('.pure-g-r');

            $(window).resize(function() {
                $('.content').width($('html').width() - 375);

            })

            // initialize
            $container.imagesLoaded( function(){
                showTiles()

            });
            break;
    }
}