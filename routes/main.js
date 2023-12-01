module.exports = function (app, forumData) {
    // Handle our routes
    app.get("/", function (req, res) {
      res.render("index.ejs", forumData);
    });
    app.get("/about", function (req, res) {
       res.render("about.ejs", forumData);
    });
    app.get("/addpost", function (req, res) {
        res.render("addpost.ejs", forumData);
    });
    app.get("/posts", function (req, res) {
        res.render("posts.ejs", forumData);
    });
    app.get("/searchpost", function (req, res) {
        res.render("searchpost.ejs", forumData);
    });
    app.get("topics", function (req, res) {
        res.render("topics.ejs", forumData);
    });
    app.get("/users", function (req, res) {
        res.render("users.ejs", forumData);
    });
  };