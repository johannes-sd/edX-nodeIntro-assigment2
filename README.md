# edX-nodeIntro-assigment2
Just a node introductary course assigment


1. Walk us through the design of your project. Why did you design your project the way you did? What difficulties did you overcome?
Followed the instrucions.
The server file contains the preloaded posts-object. 
Routes for CRUD on posts and on comments are each in a separate file. 
There is also a index-file in the route-folder witch puts both route-files into an accesible object used in the server-file.
I pass the posts-object (store) in all functioncalls on all app.routes to access it from all functions.

2. How did you test your project to verify that it works? If you used any specific curl requests, let us know.
Testing is done using Postman and a lot of console-logging. 
Using windows as enviroment, i found it easier to install a virtual linux distribution to test the curl-commands from the edX-site.
For development I use Nodemon wich is like the node-dev-package.

3. Let us know if anything doesn't work as intended so your reviewers will know ahead of time
I have not put in a lot of errorhandling. I test for existing or non-existing objects where I do the updates.

