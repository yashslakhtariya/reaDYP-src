const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://database:27017/").then(console.log('Connected!'));

// Define MongoDB schema
const userSchema = new mongoose.Schema({
     username: String,
     password: String,
});

const wishlistSchema = new mongoose.Schema({
     username: String,
     title: String,
     authors: String,
     infoLink: String,
     imageLink: String,
});

const User = mongoose.model("User", userSchema);
const Wishlist = mongoose.model("Wishlist", wishlistSchema);

app.post("/signup", async (req, res) => {
     const { username, password } = req.body;

     try {
          const user = new User({ username, password });
          await user.save();
          res.status(200).send("done");
     } catch (err) {
          console.error(err);
          res.status(500).send(`Error signing up: ${err.message}`);
     }
});

app.post("/login", async (req, res) => {
     const { username, password } = req.body;

     try {
          const user = await User.findOne({ username, password });
          if (user) {
               res.status(200).send("done");
          } else {
               res.status(401).send("error");
          }
     } catch (err) {
          console.error(err);
          res.status(500).send("Error checking credentials");
     }
});

app.post("/wishlist/add", async (req, res) => {
     const { username, title, authors, infoLink, imageLink } = req.body;

     try {
          const duplicateResult = await Wishlist.findOne({ username, title, authors });

          if (!duplicateResult) {
               const wishlistItem = new Wishlist({ username, title, authors, infoLink, imageLink });
               await wishlistItem.save();
               res.status(200).send("Book added to wishlist");
          } else {
               res.status(200).send("Book is already in the wishlist");
          }
     } catch (err) {
          console.error(err);
          res.status(500).send("Error adding book to wishlist");
     }
});

app.get("/readlist/:username", async (req, res) => {
     const user = req.params.username;

     try {
          let result = await Wishlist.find({ username: user });
          res.status(200).json(result);
     } catch (err) {
          console.error(err);
          res.status(500).send("Error fetching readlist");
     }
});

app.delete("/wishlist/delete/:username/:title/:authors", async (req, res) => {
     const { username, title, authors } = req.params;

     try {
          await Wishlist.deleteOne({ username, title, authors });
          res.status(200).send("Book deleted from wishlist");
     } catch (err) {
          console.error(err);
          res.status(500).send("Error deleting book from wishlist");
     }
});

app.listen(port, () => {
     console.log(`\nServer is running on port ${port}`);
});
