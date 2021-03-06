const express = require("express");
const bodyParser = require("body-parser");
const errorHandler = require("errorhandler");
const logger = require("morgan");

let store = {
    posts: [
      {name: 'Top 10 ES6 Features every Web Developer must know',
      url: 'https://webapplog.com/es6',
      text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
      comments: [
        {"text": String('Cruel…..var { house, mouse} = No type optimization at all')},
        {"text": "I think you’re undervaluing the benefit of ‘let’ and ‘const’."},
        {"text": "(p1,p2)=>{ … } ,i understand this ,thank you !"}
    ]
    }
    
    ]
  };

let app = express();
app.use(bodyParser.json());
app.use(logger('dev')); 
app.use(errorHandler()); 

let routes = require("./routes/index");
console.log(routes);

//POSTS-SECTION

app.get('/posts', (req, res) => { routes.post.getPosts(req, res, store); });

app.post('/posts', (req, res) => {routes.post.addPost(req, res, store)}); //Passing the store-object.

app.put('/posts/:postId', (req, res) => { routes.post.updatePost(req, res, store); });

app.delete("/posts/:postId", (req, res) => { routes.post.deletePost(req, res, store); });

//COMMENTS-SECTION

app.get('/posts/:postId/comments', (req, res) => {routes.comments.getComments(req, res, store); });

app.post('/posts/:postId/comments', (req, res) => { routes.comments.addComment(req, res, store); });

app.put('/posts/:postId/comments/:commentsId', (req, res) => { routes.comments.updateComment(req, res, store); });

app.delete('/posts/:postId/comments/:commentsId', (req, res) => { routes.comments.deleteComment(req, res, store); });

app.listen(3000);