module.exports = function (app, forumData) {
  // Handle our routes

  // Home page
  app.get("/", function (req, res) {
    res.render("index.ejs", forumData);
  });

  // About page
  app.get("/about", function (req, res) {
    res.render("about.ejs", forumData);
  });


  ///////////
  // USERS //
  ///////////

  // User Page
  app.get("/users", function (req, res) {
    // Query myForum for all users
    let sqlquery = "SELECT * FROM user";
    // Execute the query
    db.query(sqlquery, function (err, result) {
      if (err) {
        res.redirect("./");
      }

      // Render the users page
      res.render("users.ejs", { users: result });
    });
  });

  // Add User
  app.get("/adduser", function (req, res) {
    res.render("adduser.ejs", forumData);
  });

  // Added User
  app.post("/addeduser", function (req, res) {
    let sqlquery = "INSERT INTO user (username) VALUES (?)";
    let newrecord = [req.body.username];
    db.query(sqlquery, newrecord, (err, result) => {
      if (err) {
        return console.error(err.message);
      } else {
        res.send(
          "Thank you for submitting your username, " +
            req.body.username +
            "."
        );
      }
    });
  });


  ///////////
  // POSTS //
  ///////////

  // Post Added Page
  app.post("/postadded", function (req, res) {
    let sqlquery = "INSERT INTO post (title, content, username) VALUES (?,?,?)";
    let newrecord = [req.body.title, req.body.content, req.body.username];
    db.query(sqlquery, newrecord, (err, result) => {
      if (err) {
        return console.error(err.message);
      } else {
        res.send(
          "Thank you for submitting your post, " +
            req.body.username +
            ". Here is what you submitted. Title: " +
            req.body.title +
            ". Content: " +
            req.body.content
        );
      }
    });
  });

  // Post Page
  app.get("/posts", function (req, res) {
    // Query myForum for all posts
    let sqlquery = "SELECT * FROM post";
    // Execute the query
    db.query(sqlquery, function (err, result) {
      if (err) {
        res.redirect("./");
      }
      console.log(result); 
      // Render the posts page
      res.render("posts.ejs", { posts: result });
    });
  });

  // Search Post Page
  app.get("/searchpost", function (req, res) {
    res.render("searchpost.ejs", forumData);
  });

  // Add Post Page
  app.get("/addpost", function (req, res) {
    res.render("addpost.ejs", forumData);
  });

  // Post Added Page // topicname not working
  app.post("/postadded", function (req, res) {
    let sqlquery = "INSERT INTO post (title, content, username, topicname) VALUES (?,?,?,?)";
    let newrecord = [req.body.title, req.body.content, req.body.username, req.body.topicname];
    db.query(sqlquery, newrecord, (err, result) => {
      if (err) {
        return console.error(err.message);
      } else {
        res.send(
          "Thank you for submitting your post, " +
            req.body.username +
            ". Here is what you submitted. Title: " +
            req.body.title +
            ". Topic: " +
            req.body.topicname +
            ". Content: " +
            req.body.content
        );
      }
    });
  });
  

  ////////////
  // TOPICS //
  ////////////

  // Topic Page
  app.get("/topics", function (req, res) {
    // Query myForum for all topics
    let sqlquery = "SELECT * FROM topic";
    // Execute the query
    db.query(sqlquery, function (err, result) {
      if (err) {
        res.redirect("./");
      }
      // Render the topics page
      res.render("topics.ejs", { topics: result });
    });
  });
};
