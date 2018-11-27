var express = require('express');
var router = express.Router();
var Task = require('../models/task');

//default render
router.get('/', ((req, res, next) => {
    //render the template task template (task.pug) in passing in the title and addTask variables
    res.render('task', {title: 'Add task', addTask: String});
}));

//view render
router.get('/view', ((req, res, next) => {

    //find all and render the task template
    Task.find({})
    .then(task => {
       res.render('task', {title: 'View tasks', tasks: task});
    })
    .catch(err => {
        res.json({
            confirmation: 'Task view',
            message: err.message
        });
    });
}));

//view with ID render
router.get('/view/:id', (req, res) => {
    
    //grab the id parameter
    let id = req.params.id;

    //find task with id
    Task.findById(id)
    .then(task => {

        //render using the task template, passing in title and taskDetail variable
        res.render('task', {title: 'Task details', taskDetail: task});
    })
    .catch(err => {
        res.json({
            confirmation: 'Task details',
            message: err.message
        });
    });
});

//end point posts

//posts
router.post('/', (req, res) => {

    //insert data into mongo
    Task.create(req.body)
    .then(task => {
        res.json({
            confirmation: 'success',
            data: task
        });
    });
});

module.exports = router;