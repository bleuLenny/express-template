const express = require("express");
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const session = require("express-session");
const port = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false })); //Allows data from forms to be extracted
app.use(ejsLayouts);
app.set("view engine", "ejs");
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 600000,
    },
  })
);

const indexRoute = require('./routes/indexRoute');

//Middlware
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoute);

app.listen(port, () => {
  console.log(`🚀 Server has started on port ${port}`);
});