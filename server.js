// server side code using express 
const express = require('express');
const morgan = require('morgan');
//express app
const app = express();

//listen for requests
app.listen(3000);

//register view engines
app.set('view engine','ejs');


// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'))

// blogs
const blogs = [
    {title : "Blog 1", description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
    {title : "Blog 2", description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
    {title : "Blog 3", description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
]; 

// listen for requests
app.get('/',(req,res)=>{
    // res.send('<p>Hello World</p>');
    // res.sendFile('./view/index.html',{
    //     root:__dirname
    // })
    
    res.render('index',{
        title : "Home",
        blogs : blogs
    });
});


app.get('/about',(req,res)=>{
    // res.sendFile('./view/about.html',{
    //     root:__dirname
    // })
    res.render('about',{
        title : "About"
    });

});

//redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});



//404
app.use((req,res)=>{
    // res.sendFile('./view/404.html',{
    //     root:__dirname
    // })
    res.status(404).render('404',{
        title : "Not Found"
    });
});