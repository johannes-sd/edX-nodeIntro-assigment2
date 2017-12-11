module.exports = {

    addComment (req, res, store) {
        let postIndex = req.params.postId;
        let commentIndex = store.posts[postIndex].comments.length;
        //console.log(store.posts[postIndex].comments);
        console.log(req.body.posts);
        store.posts[postIndex].comments.push(req.body);
        res.status(201).send(store.posts);
    },
    getComments (req, res, store)  {
        let id = req.params.postId;
        res.status(200).send(store.posts[id].comments);
    },
    updateComment (req, res, store) {
        let postIndex = req.params.postId;
        let commentIndex = req.params.commentsId;
        store.posts[postIndex].comments[commentIndex] = req.body;
        res.status(200).send(store);
    },
    deleteComment (req, res, store) {
        let postIndex = req.params.postId;
        let commentIndex = req.params.commentsId;
        store.posts[postIndex].comments.splice(commentIndex, 1);
        res.status(204).send();
    }
};