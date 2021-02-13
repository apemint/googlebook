const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

app.use([
    express.urlencoded({ extended: true }),
    express.json()
]);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


//Mongo connect
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/googlebook',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Link API Routes here
app.use(routes)


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("🚀  Server server now on port", PORT, "👻 React App on Port 3000");
});