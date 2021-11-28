const express = require('express');

const cookieParser = require('cookie-parser');
const port = 8001;
const expressLayouts = require('express-ejs-layouts');
const app = express();

const db= require('./config/mongoose');

// reading for the post request
app.use(express.urlencoded());

// gor reading and writting into cookies we will be
// using a library or a package called cookie-parser
app.use(cookieParser());

// setting for static files

app.use(express.static('./assets'));

// alway put before routers because we have to render this in pages and then send to browser
app.use(expressLayouts);



// extract style and scripts from subpages into the the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// use express router...

app.use('/', require('./routers/index1'));
// app.use('/', require('./routers/index1')); 


// set upp the view engine

app.set('view engine','ejs');
app.set('views','./views');



app.listen(port, function(err){
    if(err){
        //console.log('error' , err);
        //  we  can also write same thing using
        console.log(`error in runnning server:${err}`);
    }
    console.log(`Server is running on port:${port}`);
})