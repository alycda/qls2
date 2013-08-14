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
    return (user == "super" && pass == "secret");
},'Super duper secret area');

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
