module.exports = {

    addPost (req, res) {
    let newPost = req.body;
    let id = posts.length;
    posts.push(newPost);
    res.status(201).send({id});
}

}