var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    response.writeHead(200);

    var lessonList = ['Biodiversity', 'Chemicals of Life', 'Inheritance', 'Selection and Evolution']

    fs.readFile(`data/${queryData.id}`, `utf8`, function(err, desc){
        var template = `
        <html>
    <head>
        <title>ibiologia</title>
        <link rel="stylesheet" href="style.css">
        <script src="theme.js" ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Finlandica&family=Splash&display=swap" rel="stylesheet">
    </head>

    <body>
        <div class="container">

            <div class="first">
                <div><img src="https://mail.google.com/mail/u/0?ui=2&ik=de5d4819c8&attid=0.1.1&permmsgid=msg-f:1737401779440857824&th=181c7db697b432e0&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-nRHTADHMIWs2kZKqTCXLNizTncKK3bkx3vjerip3P9xTD0zqGbLOt4H5zsSKNeeLR6J2mTODy4VNcYzYzQnMEM8p6MvF5C8_4ySo59P6SxxV6TA2yrvX2i78&disp=emb" alt="logo" width="60" height="60"></div>
                <div><h1>iBiologia</h1></div>
            </div>
            <div class="second">
                <div class="stats">Stats </div>
                <div class="profile">Profile</div>

                <input id="theme" type="button" value="Night" onclick="addTheme()" />
            </div>

            <div class="third">
                <div><h2>Lessons</h2></div>
                <div>
                    <img src="https://mail.google.com/mail/u/0?ui=2&ik=de5d4819c8&attid=0.2&permmsgid=msg-f:1737402907055491343&th=181c7ebd22c6090f&view=att&disp=safe" alt="bio" width="50" height="50">
                    <div class="name"><a href="bio.html"><h3><u>Biodiversity</u></h3></a></div>
                </div>
                <div>
                    <img src="https://mail.google.com/mail/u/0?ui=2&ik=de5d4819c8&attid=0.1&permmsgid=msg-f:1737402907055491343&th=181c7ebd22c6090f&view=att&disp=safe" alt="chem" width="50" height="50">                    
                    <div class="name"><a href ="chem.html"><h3><u>Chemicals of Life</u></h3></a></div>
                </div>
                <div>
                    <img src="https://mail.google.com/mail/u/0?ui=2&ik=de5d4819c8&attid=0.3&permmsgid=msg-f:1737402907055491343&th=181c7ebd22c6090f&view=att&disp=safe" alt="chem" width="50" height="50">
                    <div class="name"><a href ="inh.html"><h3><u>Inheritance</u></h3></a></div>
                </div>
                <div>
                    <img src="https://mail.google.com/mail/u/0?ui=2&ik=de5d4819c8&attid=0.4&permmsgid=msg-f:1737402907055491343&th=181c7ebd22c6090f&view=att&disp=safe" alt="chem" width="50" height="50">
                    <div class="name"><a href ="sel.html"><h3><u>Selection and Evolution</u></h3></a</div>
                </div>
            </div>
        </div>
    </body>
</html>
        `;
        response.end(template);

    })

})
app.listen(3000);