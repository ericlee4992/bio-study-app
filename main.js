var http = require('http');
var fs = require('fs');
var url = require('url')

var app = http.createServer(function(request,response){
    var _url = request.url;
    if(request.url == '/'){
      _url = '/web.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);

    const queryData = url.parse(_url, true).query;
    console.log(queryData)
    // response.end(queryData.id);

    // response.write('test')
    response.end(fs.readFileSync(__dirname + _url));
 
});
app.listen(3000);