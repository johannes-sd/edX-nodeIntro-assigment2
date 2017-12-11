module.exports = {
    getPosts (req, res, store) {
        res.status(200).send(store);
    },
    addPost (req, res, store) {
        console.log(store);
        //let newPost = req.body.posts;
        let newPost = req.body;
        let id = store.posts.length;
        store.posts.push(newPost);
        console.log(store);
        res.status(201).send({id});
    },
    updatePost (req, res, store) {
        let id = req.params.postId;
        console.log("I puttern ", store.posts[id]);
        let post = req.body;
        store.posts[id].name = post.name;
        store.posts[id].text = post.text;
        store.posts[id].url = post.url;
        res.status(200).send(store);
    },
    deletePost (req, res) {
        let id = req.params.postId;
        store.posts.splice(id, 1);
        res.status(204).send();
    }
} 