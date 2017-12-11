module.exports = {

    addComment (req, res, store) {
        let postIndex = req.params.postId;
        if(store.posts[postIndex].comments) { //if comments exists, we can go on
            let commentIndex = store.posts[postIndex].comments.length;
            store.posts[postIndex].comments.push(req.body);
        } else { //If comments doesnt exist, define array and add value to first index
            store.posts[postIndex].comments = [];
            store.posts[postIndex].comments[0] = req.body; 
        }
        res.status(201).send(store.posts);
    },
    getComments (req, res, store)  {
        let id = req.params.postId;
        res.status(200).send(store.posts[id].comments);
    },
    updateComment (req, res, store) {
        let postIndex = req.params.postId;
        let commentIndex = req.params.commentsId;
        console.log(store.posts.length);
        if(!store.posts[postIndex]) { // If there are no posts to update
            res.status(400).send(`There is no post with id ${postIndex}`);
            return;
        }
        if(!store.posts[postIndex].comments) { //if the comment does not exist
            res.status(400).send(`No comments on post with id ${postIndex} found to update.`);
            return;         
        } else { //Updating an existing comment
            store.posts[postIndex].comments[commentIndex] = req.body;
            res.status(200).send(store);
        }
        
        
    },
    deleteComment (req, res, store) {
        let postIndex = req.params.postId;
        let commentIndex = req.params.commentsId;
        store.posts[postIndex].comments.splice(commentIndex, 1);
        res.status(204).send();
    }
};