module.exports = {
    addPost (req, res, store) {
        console.log("Prosessing post request");
        let newPost = req.body;
        console.log(newPost);
        let id = store.length;
        console.log(id);
        store.posts.push(newPost);
        console.log(store);
        res.status(201).send({id});
    } 

}