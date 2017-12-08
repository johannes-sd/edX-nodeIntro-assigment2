module.exports = {

    addComment (req, res, store) {
        let postIndex = req.params.postId;
        let commentIndex = store.posts[postIndex].comments.length;
        //console.log(store.posts[postIndex].comments);
        console.log(req.body.posts);
        store.posts[postIndex].comments.push(req.body);
        res.status(201).send(store.posts);
    }
}