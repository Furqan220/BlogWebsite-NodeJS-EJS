// server side code using express 
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const lodash = require('lodash');

const blogRoutes = require('./routes/blog_route');
//express app
const app = express();


// connect database 
const dbUrl = 'mongodb+srv://furqan:aIvxFETQJWmSRTOE@blogcluster.rbjw9ul.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbUrl).then((res)=> {
    console.log("connected to DB")
    app.listen(3000);
}).catch((e)=>console.log(e));


//register view engines
app.set('view engine','ejs');

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended : true}));

// listen for requests
// home route routes 
app.get('/',(req,res)=>{
    res.redirect('/blogs');
});

// Blog routes 
app.use('/blogs', blogRoutes);

// about us routes
app.get('/about',(req,res)=>{
    res.render('others/about',{
        title : "About"
    });

});

//404
app.use((req,res)=>{
    res.status(404).render('others/404',{
        title : "Not Found"
    });
});