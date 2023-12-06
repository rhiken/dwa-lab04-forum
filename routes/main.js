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
        res.render("topics.ejs", forumData);
    });

    // User Page
    app.get("/users", function (req, res) {
        res.render("users.ejs", forumData);
    });
  };