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
        res.render("listposts.ejs", forumData);
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