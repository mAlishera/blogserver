var express = require('express');
var application = express();
var cors = require('cors');
var posts = require('./data').posts;

application.use(cors());

application.get('/', function(req, res) {
  res.json(posts);
});

application.get('/posts/:id', function(req, res) {
  var post = posts.find(post => post.id == req.params.id);
  res.json(post);
});

application.listen(3001, function() {
  console.log('Server on 3001')
});
