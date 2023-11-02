const express = require('express');
const BlogController = require('../controllers/blog_controller');
const blogRoutes = express.Router();

// get all blogs
blogRoutes.get('/', BlogController.getAllBlogs);

// go to create blog view
blogRoutes.get('/create',BlogController.getCreatePage);

// to add blog
blogRoutes.post('/',BlogController.addBlog);

// get to update single blog
blogRoutes.get('/update/:id', BlogController.getToUpdateBlog);

// update single blog
blogRoutes.post('/update/:id', BlogController.updateSingleBlog);

// get single blog by id 
blogRoutes.get('/:id', BlogController.getSingleBlog);

// delete single blog by id 
blogRoutes.delete('/:id',BlogController.deleteSingleBlog);

module.exports = blogRoutes;