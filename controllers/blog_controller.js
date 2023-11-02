const { json } = require('express');
const Blog = require('../models/blog');

// to get All Blogs 
const getAllBlogs = (req, res) => {
    // console.log("this is get blogs");
    // console.log(req.baseUrl);
    Blog.find().sort("createdAt").then((blogs) => {

        res.render('blogs/index', {
            title: "Home",
            blogs: blogs
        });
    }).catch((e) => { console.log(e) })
};

// to get create page
const getCreatePage = (req, res) => {

    // console.log("this is get create blog");
    // console.log(req.baseUrl);

    // console.log("this is create");
    // console.log(req.baseUrl);
    res.render('blogs/create', {
        title: 'Create'
    });
}
// to post created blog
const addBlog = (req, res) => {
    const blog = new Blog(req.body);
    blog.save().then((result) => {
        // console.log("Blog added");
        res.redirect('/blogs');
    }).catch((e) => {
        console.log(e);
    })
}

// to get single blog by id 
const getSingleBlog = (req, res) => {
    // console.log("this is get single blog");
    // console.log(req.baseUrl);

    const id = req.params.id;
    // console.log(id);
    Blog.findById(id).then((blog) => {
        res.render('blogs/detail', {
            title: "Blog Detail",
            blog: blog
        })
    }).catch((e) => { console.log(e) })

};

// to get single blog by id 
const getToUpdateBlog = (req, res) => {
    const id = req.params.id;
    Blog.findById(id).then((blog) => {
        res.render('blogs/update', {
            title: "Edit Blog",
            blog: blog
        })
    }).catch((e) => { console.log(e) })

};

// delete single blog by id 
const deleteSingleBlog = (req, res) => {
    // console.log("this is delete single blog");
    // console.log(req.baseUrl);
    const id = req.params.id;
    // console.log(id);
    Blog.findByIdAndDelete(id).then(result => {
        res.json({ redirect: '/blogs' });
    })
        .catch(err => {
            console.log(err);
        });

};

const updateSingleBlog = (req, res) => {
    const id = req.params.id;
    console.log(req.body)
    Blog.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        .then((result) => {
            console.log(result)
            res.redirect('/blogs/' + req.params.id.toString());
        })
        .catch(err => {
            console.log(err);
        });
};



module.exports = {
    getAllBlogs,
    getCreatePage,
    addBlog,
    getSingleBlog,
    deleteSingleBlog,
    getToUpdateBlog,
    updateSingleBlog,
};