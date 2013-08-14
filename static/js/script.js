/* Author: YOUR NAME HERE
*/

var viewWidth = $('html').width();
var player;

$(document).ready(function() {
    // fancy content load without page reload

    switchContent(window.location.pathname)
//    $('.left-dock .nav li a, .logo').click(function(e) {
//        e.preventDefault()
//        var href = $(this).attr("href");
//
//        history.pushState({}, '', href);
//
//        $('.content').load(href + " .content>*", function() {
//            switchContent(href);
//        });
//
//    })

    $.ajax({
        url: "http://getjsonp.herokuapp.com/gettweets?callback=func",
        type: "GET",
        cache: true,
        dataType: 'jsonp',
        success: function(data) {
            console.log(data)
        }
    });

    $('#watchModal #zip-box').change(function() {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+$('#zip-box').val()+'&sensor=true', function(data) {
            var where = ('listings.'+data.results[0].address_components[3].long_name+'.'+data.results[0].address_components[1].long_name).toLowerCase().replace(' ', '');
            console.log(('listings.'+data.results[0].address_components[3].long_name+'.'+data.results[0].address_components[1].long_name).toLowerCase().replace(' ', ''))

        })
    })
}); // end $(document).ready()

sublime.ready(function(){
  // You can safely call the sublime API methods here.
  // console.log('sublime ready');
  // var player = sublime.player('a240e92d');
  // console.log(player);
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

function getLocation(state) {
    var onSuccess = function(data){
        console.log();

        var where = eval('listings.'+state+'.'+data.location.time_zone.replace('America/', '').replace('_', '').toLowerCase());

        $.each(where.time, function(idx, val) {
            $('.where-to-watch .time .list-inline').append('<li>'+val+'</li>');
        });

        $.each(where.station, function(idx, val) {
            $('.where-to-watch .channel .list-inline').append('<li>'+val+'<br>'+where.network[idx]+'<br><img src="/images/'+where.network[idx]+'.png" vspace=5></li>');
        });

//        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?latlng='+data.location.latitude+','+data.location.longitude+'&sensor=false', function(data) {
//            console.log(data)
//        });
    };

    var onError = function(error){
        console.log(
            "Error:\n\n"
                + JSON.stringify(error, undefined, 4)
        );
    };

    geoip2.city(onSuccess, onError, { w3cGeolocationDisabled: true });

}

function switchContent(href) {
    $('body').removeClass()

    var city = geoip_city().toLowerCase().replace(' ', '');
    var state = geoip_region_name().toLowerCase();
    var where = eval('listings.'+state+'.'+city);

    if (!where) {
        getLocation(state);
    } else {

        console.log(eval('listings.'+state+'.'+city+'.station'))

        $.each(where.time, function(idx, val) {
            $('.where-to-watch .time .list-inline').append('<li>'+val+'</li>');
        });

        $.each(where.station, function(idx, val) {
            $('.where-to-watch .channel .list-inline').append('<li>'+val+'<br>'+where.network[idx]+'<br><img src="/images/'+where.network[idx]+'.png" vspace=5></li>');
        });

    }

    switch(href.replace('.html', '')) {
        case '/':

            $('.logo img').attr('src', '/images/qls-logo_white.png');

            $('body').addClass('home');

            // backstretch.js (first)
            $('#a').addClass('dark').backstretch("/images/slide1.jpg"); //this image is dark, and needs a white logo
            $('#b').backstretch("/images/slide2.jpg");
            $('#c').backstretch("/images/slide3.jpg");

            // swipe.js (second)
            window.mySwipe = $('#mySwipe').Swipe({
                auto: 5000,
                callback: function(index, element){
                    if($('.swipe-wrap .img').eq(index).hasClass('dark')) {
                        // load light logo (for dark backgrounds)
                    } else {
                        // load dark logo (for light backgrounds)
                    }

                    // update slider nav
                    $('#position li').removeClass('on');
                    $('#position li').eq(index).addClass('on');
                },
                transitionEnd: function(index, element) {
                    if (index == 0)
                        $('.logo img').attr('src', '/images/qls-logo_white.png');
                    else
                        $('.logo img').attr('src', '/images/queen-latifah.png');
                    // re-hide all other elements so the transition will work
                    $(element).siblings('.img').find('.info-bg').fadeOut(10);
                    // call the transition on the current element
                    $(element).find('.info-bg').fadeIn('slow');
                }
            }).data('Swipe');

            // create nav
            $('#mySwipe').before('<ul id="position" class="nav list-inline"></ul>');
            for (var i = 0; i < mySwipe.getNumSlides(); i++) {
                // add child
                $('#position').append('<li data-slide="'+i+'">'+(i+1)+'</li>');
            };
            $('#position li').click(function(){
                // console.log($(this).data('slide'));
                mySwipe.slide($(this).data('slide'));
                // shouldn't have to turn the slider back on after click, but we do for now. a little buggy but what the hell...
                mySwipe.start();
            })


            // init first slide animation
            $('#mySwipe #a .info-bg').fadeIn('slow');
            $('#position li:first').addClass('on');

            // pause on hover
            // this is nice, but when the modal is activated, the mouse is no longer 'hovering' over the swipe div, so it then triggers the start function
            $('.swipe').hover(function() {
                // $(this).data('Swipe').stop();
                // }, function() {
                // $(this).data('Swipe').start();
            });

            // pause on video modal, resume when closed
            $('#videoModal').on('show.bs.modal', function () {
              // pause current slide immediately, before modal transition is complete
              mySwipe.stop();
              // should wait until fully visible...
              sublime.player('promo').play();
            }).on('hidden.bs.modal', function () {
              // pause video
              sublime.player('promo').pause();
              // resume lazily, after modal transition is complete
              mySwipe.start();
            })



            break;
        case '/living':
            $('body').addClass('living');

            break;
        case '/loving':
            $('body').addClass('loving');

            break;
        case '/loving/1':
        case '/loving/2':
        case '/loving/3':
            $('body').addClass('loving article');


            window.mySwipe = $('#slider').Swipe({
                auto: 5000,
                callback: function(index, element){
                    // update slider nav
                    // $('#position li').removeClass('on');
                    // $('#position li').eq(index).addClass('on');
                },
                transitionEnd: function(index, element) {
                    // update lightbox link
                }
            }).data('Swipe');

            break;

        case '/learning':
            $('body').addClass('learning');

            break;
        case '/laughing':
            $('body').addClass('laughing');

            break;

        case '/laughing/go-behind-the-scenes':
            $('body').addClass('laughing article article1');

            window.mySwipe = $('#slider').Swipe({
                auto: 5000,
                callback: function(index, element){
                    // update slider nav
                    // $('#position li').removeClass('on');
                    // $('#position li').eq(index).addClass('on');
                },
                transitionEnd: function(index, element) {
                    // update lightbox link
                }
            }).data('Swipe');

            break;
        case '/laughing/latifah-helps-with-the-weather':
            $('body').addClass('laughing article article2');

            break;
        case '/laughing/hot-time-in-chicago':
            $('body').addClass('laughing article article3');

            window.mySwipe = $('#slider').Swipe({
                auto: 5000,
                callback: function(index, element){
                    // update slider nav
                    // $('#position li').removeClass('on');
                    // $('#position li').eq(index).addClass('on');
                },
                transitionEnd: function(index, element) {
                    // update lightbox link
                }
            }).data('Swipe');


            break;

        case '/article/1':
            $('body').addClass('article');

            break;
        case '/latifah':
            $('body').addClass('latifah');
            $('.mosaicflow').mosaicflow();

            break;

        case '/queue':
            $('body').addClass('queue');

            break;
        case '/queue/1':
            $('body').addClass('queue article');

            break;
    }
}