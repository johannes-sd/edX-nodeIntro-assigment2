//Putting existing routes in an object for the server-script
let routes = {};
routes.post = require("./posts.js");
routes.comments = require("./comments.js");
module.exports = routes;