var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    response.writeHead(200);

    var lessonList = ['Biodiversity', 'Chemicals of Life', 'Inheritance', 'Selection and Evolution']
    console.log(queryData)
    console.log(queryData.id)

    fs.readFile(`data/${queryData.id}`, `utf8`, function(err, desc){
        const id = queryData.id

        if (id === 'web') {
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
                        <div class="header">
                            <div><img src="https://mail.google.com/mail/u/0?ui=2&ik=de5d4819c8&attid=0.1.1&permmsgid=msg-f:1737401779440857824&th=181c7db697b432e0&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-nRHTADHMIWs2kZKqTCXLNizTncKK3bkx3vjerip3P9xTD0zqGbLOt4H5zsSKNeeLR6J2mTODy4VNcYzYzQnMEM8p6MvF5C8_4ySo59P6SxxV6TA2yrvX2i78&disp=emb" alt="logo" width="60" height="60"></div>
                            <div><h1>iBiologia</h1></div>
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
                                <div class="name"><h3><u>Biodiversity</u></h3></div>
                            </div>
                            <div>
                                <img src="https://mail.google.com/mail/u/0?ui=2&ik=de5d4819c8&attid=0.1&permmsgid=msg-f:1737402907055491343&th=181c7ebd22c6090f&view=att&disp=safe" alt="chem" width="50" height="50">                    
                                <div class="name"><a href ="chem.html"><h3><u>Chemistry</u></h3></a></div>
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

                <div class="form">
                    <form action="http://localhost:8080/create">
                        <p><input type="text" name="Name"></p>
                        <p><textarea name="description"></textarea></p>
                        <p><input type="submit"></p>
                    </form>
                </div>
            </html>
            `;
        } else if (id === 'bio') {
            var template = `
            <html>
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
            </html>
            `;
        } else if (id === 'chem'){
            var template = `
            <html>
                <head>
                    <title>Chemicals of Life</title>
                    <link rel="stylesheet" href="chem.css">
                    <script src="theme.js" ></script>
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Finlandica&family=Splash&display=swap" rel="stylesheet">
                </head>

                <body>
                    <div class="container">

                        <div class="title">
                            <h1>Chemicals of Life</h2>
                            <img src= "https://mail.google.com/mail/u/0?ui=2&ik=de5d4819c8&attid=0.2&permmsgid=msg-f:1737452773121364529&th=181cac177bea9231&view=att&disp=safe" alt="chem" width="50" height="50">
                            
                        </div>

                        <div class="home">
                            <input id="theme" type="button" value="Night" onclick="addTheme()" />
                            <a href="web.html">Home</a>
                        </div>

                        <div class ="head"><h2>Topic</h2></div>

                        <div class="topic">
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
                        </div>
                    </div>
                </body>
            </html>
            `;
        } else if (id === 'inh'){
            template = `
            <html>
                <head>
                    <title>Inheritance</title>
                    <link rel="stylesheet" href="inh.css">
                    <script src="theme.js" ></script>
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Finlandica&family=Splash&display=swap" rel="stylesheet">
                </head>

                <body>
                    <div class="container">

                        <div class="title">
                            <h1>Inheritance</h2>
                            <img src= "https://mail.google.com/mail/u/0?ui=2&ik=de5d4819c8&attid=0.3&permmsgid=msg-f:1737452773121364529&th=181cac177bea9231&view=att&disp=safe" alt="inh" width="50" height="50">
                            
                        </div>

                        <div class="home">
                            <input id="theme" type="button" value="Night" onclick="addTheme()" />
                            <a href="web.html">Home</a>
                        </div>

                        <div class ="head"><h2>Topic</h2></div>

                        <div class="topic">
                            <h3>Chromosomes</h3>
                            <video width = "200" height = "150" controls>
                                <source src="./videos/chro.mp4" type="video/mp4">
                            </video>
                            <span class="website"><a href="https://www.genome.gov/about-genomics/fact-sheets/Chromosomes-Fact-Sheet#:~:text=is%20a%20chromosome%3F-,Chromosomes%20are%20thread%2Dlike%20structures%20located%20inside%20the%20nucleus%20of,type%20of%20living%20creature%20unique." target="_blank"><span><u>Website</u></span></a></span>
                            <h3>Cell Cycle</h3>
                            <video width = "200" height = "150" controls>
                                <source src="./videos/cell.mp4" type="video/mp4">
                            </video>
                            <span class="website"><a href="https://www.britannica.com/science/cell-cycle#:~:text=The%20cell%20cycle%20is%20a,%2C%20or%20M%2C%20stage)." target="_blank"><span><u>Website</u></span></a></span>
                            <h3>Mitosis and Cytokinesis</h3>
                            <video width = "200" height = "150" controls>
                                <source src="./videos/mito.mp4" type="video/mp4">
                            </video>
                            <span class="website"><a href="https://flexbooks.ck12.org/cbook/ck-12-college-human-biology-flexbook-2.0/section/4.13/primary/lesson/mitosis-and-cytokinesis-chumbio/" target="_blank"><span><u>Website</u></span></a></span>
                        </div>
                    </div>
                </body>
            </html>
            `;
        } else if (id === 'sel'){
            var template = `
            <html>
                <head>
                    <title>Selection and Evolution</title>
                    <link rel="stylesheet" href= "sel.css">
                    <script src="theme.js" ></script>
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Finlandica&family=Splash&display=swap" rel="stylesheet">
                </head>

                <body>
                    <div class="container">

                        <div class="title">
                            <h1>Selection and Evolution</h2>
                            <img src= "https://mail.google.com/mail/u/0?ui=2&ik=de5d4819c8&attid=0.4&permmsgid=msg-f:1737452773121364529&th=181cac177bea9231&view=att&disp=safe" alt="sel" width="50" height="50">
                            
                        </div>

                        <div class="home">
                            <input id="theme" type="button" value="Night" onclick="addTheme()" />
                            <a href="web.html">Home</a>
                        </div>

                        <div class ="head"><h2>Topic</h2></div>

                        <div class="topic">
                            <h3>Lamarck's Theory of Evolution</h3>
                            <video width = "200" height = "150" controls>
                                <source src="./videos/lamarck.mp4" type="video/mp4">
                            </video>
                            <span class="website"><a href="https://www.britannica.com/science/Lamarckism#:~:text=Lamarckism%2C%20a%20theory%20of%20evolution,be%20transmitted%20to%20their%20offspring." target="_blank"><span>Website</span></a></span>
                            <h3>Darwin's Theory of Natual Selection</h3>
                            <video width = "200" height = "150" controls>
                                <source src="./videos/theory.mp4" type="video/mp4">
                            </video>
                            <span class="website"><a href="https://www.ndsu.edu/pubweb/~mcclean/plsc431/popgen/popgen5.htm" target="_blank"><span><u>Website</u></span></a></span>
                            <h3>Evidence of Evolution</h3>
                            <video width = "200" height = "150" controls>
                                <source src="./videos/evidence.mp4" type="video/mp4">
                            </video>
                            <span class="website"><a href="https://www.khanacademy.org/science/biology/her/evolution-and-natural-selection/a/lines-of-evidence-for-evolution" target="_blank"><span><u>Website</u></span></a><span>
                        </div>
                    </div>
                </body>
            </html>
            `;
        }
        response.end(template);
    })
})
app.listen(8080);