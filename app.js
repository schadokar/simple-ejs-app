const express = require("express");
const appRoutes = require("./router/app-routes");
// create an app instance
const app = express();

// set ejs as view-engine
app.set("view engine", "ejs");

// setup public folder
app.use(express.static("./public"));

// app routes
app.use("/", appRoutes);

app.listen(3000, () => {
  console.log("app is listening to port 3000");
});
