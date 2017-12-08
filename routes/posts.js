module.exports = {
    getPosts (req, res, store) {
        res.status(200).send(store);
    },
    addPost (req, res, store) {
        let newPost = req.body.posts;
        let id = store.posts.length;
        store.posts.push(newPost);
        console.log(store);
        res.status(201).send({id});
    },
    updatePost (req, res, store) {
        store.posts[req.params.postId] = req.body;
        res.status(200).send(store.accounts[req.params.id]);
    }
}