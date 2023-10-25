// server side code using express 
const express = require('express');

const app = express();
app.listen(3000);

//register view engines
app.set('view engine','ejs');

// listen for requests
app.get('/',(req,res)=>{
    // res.send('<p>Hello World</p>');
    // res.sendFile('./view/index.html',{
    //     root:__dirname
    // })
    res.render('index',{
        title : "Home"
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
    res.status(404).render('404');
});