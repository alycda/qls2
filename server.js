//setup Dependencies
var connect = require('connect')
    , express = require('express')
    , port = (process.env.PORT || 8081)
    , http = require('http');

//Setup Express
var server = express.createServer();
server.configure(function(){
    server.set('views', __dirname + '/views');
    server.set('view options', { layout: false });
    server.use(connect.bodyParser());
    server.use(express.cookieParser());
    server.use(express.session({ secret: "shhhhhhhhh!"}));
    server.use(connect.static(__dirname + '/static'));
    server.use(server.router);
});

//setup the errors
server.error(function(err, req, res, next){
    if (err instanceof NotFound) {
        res.render('404.jade', { locals: {
                  title : '404 - Not Found'
                 ,description: ''
                 ,author: ''
                 ,analyticssiteid: 'XXXXXXX'
                },status: 404 });
    } else {
        res.render('500.jade', { locals: {
                  title : 'The Server Encountered an Error'
                 ,description: ''
                 ,author: ''
                 ,analyticssiteid: 'XXXXXXX'
                 ,error: err
                },status: 500 });
    }
});
server.listen(port);

///////////////////////////////////////////
//              Routes                   //
///////////////////////////////////////////

/////// ADD ALL YOUR ROUTES HERE  /////////
var auth = express.basicAuth(function(user, pass) {
    return (user == "secret" && pass == "super");
},'Super duper secret area');

<<<<<<< HEAD
=======


server.get('/living/kravitz-design-inc.html', function(req,res){
    res.render('living1.jade', {
        locals : {
            title : 'Queen Latifah: Kravitz Design Inc'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'living article1'
        }
    });
});


server.get('/living/look-fly-be-cool.html', function(req,res){
    res.render('living2.jade', {
        locals : {
            title : 'Queen Latifah: Look Fly, Be Cool -- All in Time for Back to School'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'living article2'
        }
    });
});


server.get('/living/how-to-buy-on-a-budget.html', function(req,res){
    res.render('living3.jade', {
        locals : {
            title : 'Queen Latifah: How to Buy on a Budget, Without Looking Like it'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'living article3'
        }
    });
});


server.get('/living/transitioning-summer-pieces-to-fall.html', function(req,res){
    res.render('living4.jade', {
        locals : {
            title : 'Queen Latifah: Transitioning Summer Pieces into Fall'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'living article4'
        }
    });
});


server.get('/living/mani-c-monday-fabulous-florals.html', function(req,res){
    res.render('living5.jade', {
        locals : {
            title : 'Queen Latifah: Mani-c Monday: Fabulous Florals'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'living article5'
        }
    });
});


server.get('/learning/shining-a-spotlight-on-career-wardrobe.html', function(req,res){
    res.render('learning1.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'learning article1'
        }
    });
});


server.get('/learning/queen-latifah-awards-ll-cool-j.html', function(req,res){
    res.render('learning2.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'learning article2'
        }
    });
});


server.get('/learning/homeless-to-harvard-an-incredible-true-story.html', function(req,res){
    res.render('learning3.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'learning article3'
        }
    });
});


server.get('/learning/blogher-13-voices-of-the-year.html', function(req,res){
    res.render('learning4.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'learning article4'
        }
    });
});


server.get('/learning/save-money-go-green.html', function(req,res){
    res.render('learning5.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'learning article5'
        }
    });
});


server.get('/learning/shining-a-spotlight-on-south-central-scholars-foundation.html', function(req,res){
    res.render('learning6.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'learning article6'
        }
    });
});


server.get('/learning/summer-read-wrap-up.html', function(req,res){
    res.render('learning7.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'learning article7'
        }
    });
});


server.get('/laughing/chirstina-bianco-remarkable-diva-impressions.html', function(req,res){
    res.render('laughing4.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'laughing article1'
        }
    });
});


server.get('/laughing/go-behind-the-scenes-with-queen-latifah.html', function(req,res){
    res.render('laughing1.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'laughing article1'
        }
    });
});


server.get('/laughing/hot-time-in-chicago.html', function(req,res){
    res.render('laughing3.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'laughing article3'
        }
    });
});


server.get('/laughing/queen-latifah-takes-over-the-weather.html', function(req,res){
    res.render('laughing2.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'laughing article2'
        }
    });
});


server.get('/daily-queue/exercise-fads-you-won-t-believe-are-real.html', function(req,res){
    res.render('laughing.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
        }
    });
});


server.get('/daily-queue/funny-fake-ads-we-wish-were-real.html', function(req,res){
    res.render('laughing.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
        }
    });
});


server.get('/daily-queue/the-five-cutest-animals-to-brighten-your-day.html', function(req,res){
    res.render('laughing.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
        }
    });
});


server.get('/daily-queue/happy-birthday-neil-armstrong--five-incredible-images-from-space.html', function(req,res){
    res.render('laughing.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
        }
    });
});


server.get('/daily-queue/-i-love-lucy-.html', function(req,res){
    res.render('laughing.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
        }
    });
});


server.get('/daily-queue/wonderous-waterfalls-around-the-world.html', function(req,res){
    res.render('laughing.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
        }
    });
});


server.get('/daily-queue/throw-back-thursday-.html', function(req,res){
    res.render('laughing.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
        }
    });
});


server.get('/daily-queue/book-lover-s-day-.html', function(req,res){
    res.render('laughing.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
        }
    });
});


server.get('/daily-queue/what-is-vocal-fry--is-the-epidemic-real--can-it-be-stopped-.html', function(req,res){
    res.render('laughing.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
        }
    });
});


server.get('/daily-queue/top-5-internet-memes-we-are-glad-are-over-.html', function(req,res){
    res.render('laughing.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
        }
    });
});


server.get('/daily-queue/happy-birthday-steve-martin-.html', function(req,res){
    res.render('laughing.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
        }
    });
});


server.get('/daily-queue/throw-back-thursday---driving-in-los-angeles-through-the-ages.html', function(req,res){
    res.render('laughing.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
        }
    });
});


server.get('/daily-queue/funny-friday.html', function(req,res){
    res.render('laughing.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
        }
    });
});






>>>>>>> f975478f67479337f3edb5a448caf191fda84fa5
server.get('/listings', function(req, res) {
    console.log(require('./tvguide.js').listings.alabama.birmingham);
    res.end();
});

server.get('/gettweets', auth, function(req,res){
    var url = "http://queen:develop@queen.projects-directory.com/twitter/get-tweets.php";
    http.get(url, function(res) {
        var body = '';

        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            var feed = JSON.parse(body);
            console.log(feed);
        });
    }).on('error', function(e) {
            console.log("Got error: " + e.message);
    });

    res.end();
});



server.get('/', auth, function(req,res){
  res.render('index.jade', {
    locals : {
              title : 'Queen Latifah'
             ,description: ''
             ,author: ''
             ,analyticssiteid: 'XXXXXXX'
             ,pageid: 'home'
            }
  });
  // res.sendfile('index.html');
});

server.get('/static', auth, function(req,res){
    res.sendfile('static/html/index.html');
});


server.get('/grid', function(req,res){
    res.render('grid.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
        }
    });
});

server.get('/latifah.html', function(req,res){
    res.render('latifah.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'latifah'
        }
    });
});

server.get('/living.html', function(req,res){
    res.render('living.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'living'
        }
    });
});

server.get('/loving.html', function(req,res){
    res.render('loving.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'loving'
        }
    });
});

// make me dynamic
server.get('/loving/hollywood-cover-girl.html', function(req,res){
    res.render('loving1.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'loving article1'
        }
    });
    // res.sendfile('article-1.html');
});
// make me dynamic
server.get('/loving/mateo-rising.html', function(req,res){
    res.render('loving2.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'loving article2'
        }
    });
    // res.sendfile('article-1.html');
});
// make me dynamic
server.get('/loving/flick-pick.html', function(req,res){
    res.render('loving3.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'loving article3'
        }
    });
    // res.sendfile('article-1.html');
});

server.get('/learning.html', function(req,res){
    res.render('learning.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'learning'
        }
    });
});

server.get('/laughing.html', function(req,res){
    res.render('laughing.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'laughing'
        }
    });
});

// make me dynamic
server.get('/laughing/go-behind-the-scenes.html', function(req,res){
    res.render('laughing1.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'laughing article1'
        }
    });
    // res.sendfile('article-1.html');
});

// make me dynamic
server.get('/laughing/latifah-helps-with-the-weather.html', function(req,res){
    res.render('laughing2.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'laughing article2'
        }
    });
    // res.sendfile('article-1.html');
});

// make me dynamic
server.get('/laughing/hot-time-in-chicago.html', function(req,res){
    res.render('laughing3.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'laughing article3'
        }
    });
    // res.sendfile('article-1.html');
});

// make me dynamic
server.get('/laughing/chirstina-bianco-remarkable-diva-impressions.html', function(req,res){
    res.render('laughing4.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'laughing article4'
        }
    });
    // res.sendfile('article-1.html');
}); 

server.get('/queue', function(req,res){
    res.render('queue.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'queue'
        }
    });
    // res.sendfile('queue.html');
});

// i wanna be dynamic too!
server.get('/queue/1', function(req,res){
    res.render('q-article.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'q-article'
        }
    });
    // res.sendfile('queue-1.html');
});

// dynamic Queue Article
server.get('/daily-queue/funny-fake-ads-we-wish-were-real.html', function(req,res){
    res.render('q-article1.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'q-article'
        }
    });
    // res.sendfile('queue-1.html');
});

// dynamic Queue Article
server.get('/daily-queue/the-five-cutest-animals-to-brighten-your-day.html', function(req,res){
    res.render('q-article2.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'q-article'
        }
    });
    // res.sendfile('queue-1.html');
});

// dynamic Queue Article
server.get('/daily-queue/happy-birthday-neil-armstrong--five-incredible-images-from-space.html', function(req,res){
    res.render('q-article3.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'q-article'
        }
    });
    // res.sendfile('queue-1.html');
});

// dynamic Queue Article
server.get('/daily-queue/i-love-lucy.html', function(req,res){
    res.render('q-article4.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'q-article'
        }
    });
    // res.sendfile('queue-1.html');
});

// dynamic Queue Article
server.get('/daily-queue/wonderous-waterfalls-around-the-world.html', function(req,res){
    res.render('q-article5.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'q-article'
        }
    });
    // res.sendfile('queue-1.html');
});

// dynamic Queue Article
server.get('/daily-queue/throw-back-thursday-.html', function(req,res){
    res.render('q-article6.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'q-article'
        }
    });
    // res.sendfile('queue-1.html');
});

// dynamic Queue Article
server.get('/daily-queue/book-lover-s-day-.html', function(req,res){
    res.render('q-article7.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'q-article'
        }
    });
    // res.sendfile('queue-1.html');
});

server.get('/ip', function(req,res){
    res.render('ip.jade', {
        locals : {
            title : 'Queen Latifah'
            ,description: ''
            ,author: ''
            ,analyticssiteid: 'XXXXXXX'
            ,pageid: 'ip'
        }
    });
});


//A Route for Creating a 500 Error (Useful to keep around)
server.get('/500', function(req, res){
    throw new Error('This is a 500 Error');
});

//The 404 Route (ALWAYS Keep this as the last route)
server.get('/*', function(req, res){
    throw new NotFound;
});

function NotFound(msg){
    this.name = 'NotFound';
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
}

console.log('Listening on http://0.0.0.0:' + port );
