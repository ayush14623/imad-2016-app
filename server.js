var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article1': {
        title:'Article1',
        heading: 'Article1',
        date: 'Sept 28,2016',
        content:`This is my first article.
                 howz you`
    },
    'article2': {
        title:'Article2',
        heading: 'Article2',
        date: 'Sept 28,2016',
        content:`This is my second article.
                 howz you`
    },
    'article3': {   
        title:'Article3',
        heading: 'Article3',
        date: 'Sept 28,2016',
        content:`This is my third article.
                 howz you`
    },
};
var friends={
    'ayush': {
        title:'Ayush',
        heading: 'Ayush Verma',
        date: 'Oct 09,2016',
        content:`Ayush Verma 
                Hometown-Kanpur UP`
        college:`Gl bajaj Institute of Technology And Management `
        room_no:`Room C-310`
    },
    'ankit': {
        title:'Ankit',
        heading: 'Ankit Kumar',
        date: 'Oct 09,2016',
        content:`Ankit Kumar 
                Hometown-Patna Bihar`
        college:`Gl bajaj Institute of Technology And Management `
        room_no:`Room C-310`
    },
    'shivam': {
        title:'Shivam',
        heading: 'Shivam Sharma',
        date: 'Oct 09,2016',
        content:`Shivam Sharma 
                Hometown-Patna Bihar`
        college:`IEC `
        room_no:`Room C-311`
    },
    'surud':{
        title:'Surud',
        heading: 'Surud Iqbal',
        date: 'Oct 09,2016',
        content:`Surud Iqbal 
                Hometown-Gaya Bihar`
        college:`IEC `
        room_no:`Room C-311`
    },
};

function createtemplate(dat){
     var title1=dat.title;
     var date1=dat.date;
     var heading1=dat.heading ;
     var content1=dat.content;
    var htmltemplate=`
    <html>
       <head>
        <title>
            ${title1}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
    
       </head>
    <body>
        <div class="container">
             <div>
                <a href="/">Home</a>
                  </div>
              <hr/>
              <h3>
                         ${heading1}
              </h3>
              <div>
                         ${date1}
              </div>
              <div>
                  <p>
                    ${content1}
                  </p>
               </div>
        </div>
    </body>
    </html>
    `;
    return htmltemplate;
}
function createtemplate1(dat){
     var title=dat.title;
     var date=dat.date;
     var heading=dat.heading ;
     var content=dat.content;
     var room_no=dat.room_no;
     var college=dat.college;
    var htmltemplate=`
    <html>
       <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
    
       </head>
    <body>
        <div class="container">
             <div>
                <a href="/">Home</a>
                  </div>
              <hr/>
              <h3>
                         ${heading}
              </h3>
              <div>
                         ${date}
              </div>
              <div>
                  <p>
                    ${content}
                  </p>
               </div>
               <div>
                  <p>
                    ${college}
                  </p>
               </div>
               <div>
                  <p>
                    ${room_no}
                  </p>
               </div>
        </div>
    </body>
    </html>
    `;
    return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req, res){
    var articleName= req.params.articleName;
  res.send(createtemplate(articles[articleName]));
});

app.get('/gn:Name',function(req, res){
    var Name= req.params.Name;
  res.send(createtemplate1(friends[Name]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/PicsArt_09-15-02.44.58.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'PicsArt_09-15-02.44.58.jpg'));
});
app.get('/ui/fb.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fb.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
