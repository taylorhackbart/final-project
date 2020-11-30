const express = require("express");
const mongoose = require("mongoose");

const htmlRoutes = require("./routes/html");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(htmlRoutes);
app.use(apiRoutes)


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/final-project");


app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
