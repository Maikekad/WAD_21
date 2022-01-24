const express = require("express");
const app = express();

// register the ejs view engine
app.set('view engine', 'ejs');

// listen for requests on port 3000

app.get("/", (req, res) => {
  /* res.sendFile() is a method that can be used to send files as its name indicates. However, it takes the absolute
not the relative path to the file. Therefore, you need to specify the root directory of the file.
To avoid this confusion, you can use "__dirname", which you have access to after installing "lodash" */
  //res.sendFile("./views/index.html", { root: __dirname });
  res.render('index', { welcomeMessage: 'Welcome to the page!'});
});

  app.get("/posts", (req, res) => {
    //res.sendFile("./views/posts.html", { root: __dirname });
    let posts = [
        { id: 1, title: "Charlotte Bronte's book", body: "Jane Eyre: ......." },
        { id: 2, title: "Margaret Mitchell's's book", body: "Gone with the wind ......." },
        { id: 3, title: "Antony Burgess's book", body: "A Clockwork Orange ......." },
        { id: 4, title: "Fyodor Dostoevski's book", body: "Crime and Punishment ......." }
        ];
    res.render('posts', {posts: posts});
  });

  app.get("/contact", (req, res) => {
    //res.sendFile("./views/contactus.html", { root: __dirname });
    res.render('contactus');
  });
/*
  app.get("/404", (req, res) => {
    //res.sendFile("./views/404.html", { root: __dirname });
    res.render('404');
  });*/


// We will discuss this method next week, when we speak about Middlewares
app.use((req, res) => {
  //res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render('404');
});


app.listen(3000);
console.log("Hello world")
/* app.get() is used to respond to Get requests, and it takes two arguments:
1- arg1: represents what path/url you want to listen to (e.g., '/' listens to index path)
2- arg2: represents a function that takes in request and response objects */
