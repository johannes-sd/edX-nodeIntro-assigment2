const express = require("express");
const bodyParser = require("body-parser");
const errorHandler = require("errorhandler");
const logger = require("morgan");

let posts = [];

let app = express();
app.use(bodyParser.json());
app.use(logger('dev')); 
app.use(errorHandler()); 

let postMethods = require("./routes/posts");

app.get('/posts', (req, res) => {
    res.status(200).send(posts);
});

app.post('/posts', postMethods.addPost);

app.put('/posts/:postId', (req, res) => {
    store.accounts[req.params.id] = req.body;
    res.status(200).send(store.accounts[req.params.id]);
});

app.delete("/posts/:postId", (req, res) => {
    store.accounts.splice(req.params.id, 1);
    res.status(204).send();
});

app.get('/posts/:postId/comments', (req, res) => {
    res.status(200).send(store.accounts);
});

app.post('/posts/:postId/comments', (req, res) => {
    let newAccount = req.body;
    let id = store.accounts.length;
    store.accounts.push(newAccount);
    res.status(201).send({id});
});


app.listen(3000);