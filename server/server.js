var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 3000;
var morgan = require('morgan');
var db = require('./db.js');

app.use(morgan('combined'));
app.use(express.static(__dirname + './../client'));
app.use(bodyparser.json());

//
//
//
db.createUser({ username: 'daniel', password: 'bacon' });
db.createPost({ username: 'daniel', title: 'whaaaaaaaa?', message: 'I hate bacon', category: 'recipe' });

db.createUser({ username: 'jon', password: 'elf' });
db.createPost({ username: 'jon', title: 'get to work!', message: 'working', category: 'work' });

db.createUser({ username: 'juan', password: 'frijoles' });
db.createPost({ username: 'juan', title: 'burritos', message: 'me gusta mi bicicleta', category: 'food' });

db.createUser({ username: 'raphael', password: 'shoes' });
db.createPost({ username: 'raphael', title: 'blingex', message: 'Can I wash your window?', category: 'clean' });

db.createUser({ username: 'admin', password: 'admin' });
db.createPost({ username: 'admin', title: 'administration', message: 'we are hacked', category: 'hack' });

app.get('/postList', function(req, res, next) {
  db.findAllPosts().then(function(posts) {
    res.status(200).send(posts);
  });
});

//
//
//
app.listen(port);