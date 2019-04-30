var http = require('http');
var colors = require('colors');

var handlers = require('./handlers'); // nasz modul

function start() {
  function onRequest(request, response) {
    console.log("Odebrano zapytanie.".red);
    console.log("Zapytanie " + request.url + " odebrane.");

    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

    switch (request.url) { // switch rozrozniajacy zapytania
        case '/':
        case '/start':
            handlers.welcome(request, response);
            break;
        case '/upload':
            handlers.upload(request, response);
            break;
        default:
            handlers.error(request, response);
        case '/show':
            handlers.show(request, response);
            break;
    }
  }

  http.createServer(onRequest).listen(9000);

  console.log("Uruchomiono serwer!".rainbow);
}

exports.start = start;