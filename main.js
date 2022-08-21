var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring')

function generateFileList(filelist){
    let list = '<ul>';
    let i = 0;
    while (i < filelist.length){
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        i = i + 1;
    }
    list = list + '</ul>';
    return list;
}

function templateHTML(title, desc, fileList, body){
    return `
    <html>
    <head>
        <title>ibiologia - ${title}</title>
        <meta charset="utf-8">
    </head>
    <body>
        <h1><a href="/">Ibiologia</a></h1>
        ${fileList}
        <h2>${title}</h2>
        <p>${desc}</p>
        ${body}
    </body>
    </html>
    `
}

function templateLesson(title, body){
    return `
    <html>
        <head>
            <title>${title}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Finlandica&family=Splash&display=swap" rel="stylesheet">
        </head>

        <body>
            <div class="container">

                <div class="title">
                    <h1>${title}</h2>
                    <img src= "https://mail.google.com/mail/u/0?ui=2&ik=de5d4819c8&attid=0.1&permmsgid=msg-f:1737452773121364529&th=181cac177bea9231&view=att&disp=safe" alt="bio" width="50" height="50">
                    
                </div>
                
                <div class="home">
                    <input id="theme" type="button" value="Night" onclick="addTheme()" />
                    <a href="localhost:4001/">Home</a>
                </div>
            
                <div class ="head"><h2>Topic</h2></div>
                ${body}
            </div>
        </body>
    </html>
        `
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    // google.com/search/

    console.log(pathname)
    console.log(pathname.split("/"))
    if (pathname === '/'){
        if (queryData.id === undefined){
            var title = 'ibiologia';
            fs.readdir('./data', function(error, filelist){
                var template = 
                `<html>
                    <head>
                    <title>${title}</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Finlandica&family=Splash&display=swap" rel="stylesheet">
                    </head>
            
                    <body>
                        <div class="container">
                
                            <div class="header">
                                <div><img src="https://mail.google.com/mail/u/0?ui=2&ik=de5d4819c8&attid=0.1.1&permmsgid=msg-f:1737401779440857824&th=181c7db697b432e0&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-nRHTADHMIWs2kZKqTCXLNizTncKK3bkx3vjerip3P9xTD0zqGbLOt4H5zsSKNeeLR6J2mTODy4VNcYzYzQnMEM8p6MvF5C8_4ySo59P6SxxV6TA2yrvX2i78&disp=emb" alt="logo" width="60" height="60"></div>
                                <div><h1>${title}</h1></div>
                            </div>
                
                            <div class="options">
                                <div class="stats">Stats </div>
                                <div class="profile">Profile</div>
                
                                <input id="theme" type="button" value="Night" onclick="addTheme()" />
                            </div>
                
                            <div class="lessons">
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
                
                            <div class="quiz">
                                <a href ="quiz.html"><h3><u>Quiz</u></h3></a>
                            </div>
                
                            <div class="glossary"><a href = "http://localhost:4001/">Glossary</a></div>
                        </div>
                    </body>
                </html>`
                response.end(template);
                response.writeHead(200);
            
            })
        } else {
            // localhost:4001?id=qweqwds
            var title = queryData.id;
            fs.readdir('./data', function(error, filelist) {
                fs.readFile(`data/${queryData.id}`, `utf8`, function(err, desc){
                    var template = templateHTML(title, desc,
                        generateFileList(filelist),
                        `

                        `);
                    response.writeHead(200);
                    response.end(template);
                })
            })
        }
    } else if (pathname === '/chem'){
        var title = "Chemicals of Life";
        var template = templateLesson(title, 
        `<div class="topic">
            <h3>Biomolecules</h3>
            <video width = "200" height = "150" controls>
                <source src="./videos/biomol.mp4" type="video/mp4">
            </video>
            <span class="website"><a href="https://www.britannica.com/science/biomolecule#:~:text=biomolecule%2C%20also%20called%20biological%20molecule,%2C%20nucleic%20acids%2C%20and%20proteins." target="_blank"><span><u>Website</u></span></a></span>
            <h3>Lipids</h3>
            <video width = "200" height = "150" controls>
                <source src="./videos/lipids.mp4" type="video/mp4">
            </video>
            <span class="website"><a href="https://www.britannica.com/science/lipid" target="_blank"><span><u>Website</u></span></a></span>
            <h3>Proteins</h3>
            <video width = "200" height = "150" controls>
                <source src="./videos/proteins.mp4" type="video/mp4">
            </video>
            <span class="website"><a href="https://www.britannica.com/science/protein" target="_blank"><span><u>Website</u></span></a></span>
        </div>`)
        response.writeHead(200);
        response.end(template);
    } else if (pathname === '/bio') {
        fs.readdir('./data', function(error, filelist) {
          fs.readFile(`data/${queryData.id}`, `utf8`, function(err, desc) {
            var title = queryData.id;
            var template = templateHTML("Biodiversity", 
              generateFileList(filelist),
              `<html>
                  <head>
                      <title>Biodiversity</title>
                      <link rel="stylesheet" href="bio.css">
                      <script src="theme.js" ></script>
                      <link rel="preconnect" href="https://fonts.googleapis.com">
                      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                      <link href="https://fonts.googleapis.com/css2?family=Finlandica&family=Splash&display=swap" rel="stylesheet">
                  </head>
              
                  <body>
                      <div class="container">
              
                          <div class="title">
                              <h1>Biodiversity</h2>
                              <img src= "https://mail.google.com/mail/u/0?ui=2&ik=de5d4819c8&attid=0.1&permmsgid=msg-f:1737452773121364529&th=181cac177bea9231&view=att&disp=safe" alt="bio" width="50" height="50">
                          </div>
                          
                          <div class="home">
                              <input id="theme" type="button" value="Night" onclick="addTheme()" />
                              <a href="web.html">Home</a>
                          </div>
                      
                          <div class ="head"><h2>Topic</h2></div>
              
                          <div class="topic">
                              <h3>System of Classification</h3>
                              <video width = "200" height = "150" controls>
                                  <source src="videos/Classification.mp4" type="video/mp4">
                              </video>
                              <span class="website"><a href="https://www.sciencelearn.org.nz/resources/1438-classification-system" target="_blank"><span><u>Website</u></span></a></span>
                              <h3>Animal Kingdom</h3>
                              <video width = "200" height = "150" controls>
                                  <source src="videos/kingdom.mp4" type="video/mp4">
                              </video>
                              <span class="website"><a href="https://www.factmonster.com/dk/encyclopedia/science/animal-kingdom" target="_blank"><span><u>Website</u></span></a></span>
                              <h3>Kingdom Protista</h3>
                              <video width = "200" height = "150" controls>
                                  <source src="videos/protista.mp4" type="video/mp4">
                              </video>
                              <span class="website"><a href="https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Book%3A_Introductory_Biology_(CK-12)/08%3A_Protists_and_Fungi/8.01%3A_Protist_Kingdom" target="_blank"><span><u>Website</u></span></a></span>
                              <h3>Kingdom Fungi</h3>
                              <video width = "200" height = "150" controls>
                                  <source src="videos/fung.mp4" type="video/mp4">
                              </video>
                              <span class="website"><a href="https://www.ncbi.nlm.nih.gov/books/NBK559443/" target="_blank"><span><u>Website</u></span></a></span>
                          </div>
                      </div>
                  </body>
              </html>`);
            response.writeHead(200);
            response.end(template);
          })
        })
    } else if (pathname === '/delete') {
        let body = '';
        request.on('data', function(data) {
          body = body + data;
        });
        request.on('end', function() {
          let post = qs.parse(body);
          let id = post.id;
          fs.unlink(`data/${id}`, function(err) {
            response.writeHead(302, {Location: `/`});
            response.end();
          })
        })
    } else if (pathname === '/create_process') {
        let body = '';
        request.on('data', function(data) {
          body = body + data;
        });
        request.on('end', function() {
          let post = qs.parse(body);
          let title = post.title;
          let description = post.description;
          fs.writeFile(`data/${title}`, description, 'utf8', function(err) {
            response.writeHead(302, {Location: `/?id=${title}`}); // Redirect
            response.end();
          })
        });
    } else if (pathname === "/update_process") {
        let body = '';
        request.on('data', function(data) {
          body = body + data;
        });
        request.on('end', function() {
          let post = qs.parse(body);
          let id = post.id;
          let title = post.title;
          let description = post.description;
          fs.rename(`data/${id}`, `data/${title}`, function(err) {
            fs.writeFile(`data/${title}`, description, `utf8`, function(err) {
              response.writeHead(302, {Location: `/?id=${title}`});
              response.end();
            })
          })
        })
    } else if (pathname === "/delete_process") {
        var body = '';
        request.on('data', function(data){
          body = body + data;
        });
        request.on('end', function(){
            var post = qs.parse(body);
            var id = post.id;
            fs.unlink(`data/${id}`, function(error){
              response.writeHead(302, {Location: `/`});
              response.end();
            })
        });
      }
})
app.listen(4001);