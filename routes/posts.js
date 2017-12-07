module.exports = {
    addPost (req, res, store) {
        let newPost = req.body;
        let id = store.length;
        store.posts.push(newPost);
        console.log(store);
        res.status(201).send({id});
    },

    addComment (req, res, store) {
        let postIndex = req.params.postId;
        let commentIndex = store.posts[postIndex].comments.length;
        //console.log(store.posts[postIndex].comments);
        store.posts[postIndex].comments.push(req.body);
        console.log(store.posts);
        res.status(201).send(store.posts);
    }
}