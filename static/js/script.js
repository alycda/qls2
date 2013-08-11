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
    console.log('func');

    var tweets=$('.tweets');

    $.each(data, function (i) {
        var tweet = this,
            text = tweet.text;
        text = text.replace(/(http:\/\/\S+)/g, '<a href="$1">$1</a>');
        text = text.replace(/\@(\w+)/g, '<a href="http://twitter.com/$1">@$1</a>');
        tweets.append('<li>' + text + '</li>');
    });

    tweets.find('li').hide();

    var i = 1;
    $('.tweets li:eq('+i+')').fadeIn(500).delay(6500).fadeOut(500)
    i++;
    setInterval(
        function(){
            i++;
            $('.tweets li:eq('+i+')').fadeIn(500).delay(8500).fadeOut(500);
            if(i >= tweets.find('li').length) i = 1;
        },9500);
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

        case '/queue':
            $('body').addClass('queue');
            break;
    }
}