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

    // Add Post Page
    app.get("/addpost", function (req, res) {
        res.render("addpost.ejs", forumData);
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
            let postData = Object.assign({}, forumData, { posts: result });
            console.log(postData);
            // Render the posts page
            res.render("posts.ejs", {posts: result});
        });
    });

    // Search Post Page
    app.get("/searchpost", function (req, res) {
        res.render("searchpost.ejs", forumData);
    });

    // Topic Page
    app.get("/topics", function (req, res) {
        // Query myForum for all topics
        let sqlquery = "SELECT * FROM topic";
        // Execute the query
        db.query(sqlquery, function (err, result) {
            if (err) {
                res.redirect("./");
            }
            let topicData = Object.assign({}, forumData, { topics: result });
            console.log(topicData);
            // Render the topics page
            res.render("topics.ejs", {topics: result});
        });
    });

    // User Page
    app.get("/users", function (req, res) {
        // Query myForum for all users
        let sqlquery = "SELECT * FROM user";
        // Execute the query
        db.query(sqlquery, function (err, result) {
            if (err) {
                res.redirect("./");
            }
            let userData = Object.assign({}, forumData, { users: result });
            console.log(userData);
            // Render the users page
            res.render("users.ejs", {users: result});
        });
    });
  };