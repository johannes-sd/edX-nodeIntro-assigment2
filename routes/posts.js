module.exports = {
    addPost (req, res, store) {
        let newPost = req.body.posts;
        let id = store.posts.length;
        store.posts.push(newPost);
        console.log(store);
        res.status(201).send({id});
    },

    addComment (req, res, store) {
        let postIndex = req.params.postId;
        let commentIndex = store.posts[postIndex].comments.length;
        //console.log(store.posts[postIndex].comments);
        console.log(req.body.posts);
        store.posts[postIndex].comments.push(req.body);
        res.status(201).send(store.posts);
    }
}