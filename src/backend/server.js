const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
     host: "localhost",
     user: "yash",
     password: "krsna",
     database: "reaDYP_users",
});

connection.connect();

app.post("/signup", (req, res) => {
     const { username, password } = req.body;

     const sql = "INSERT INTO users VALUES (?, ?)";
     connection.query(sql, [username, password], (err, result) => {
          if (err) {
               console.error(err);
               res.status(500).send(`Error signing up: ${err.message}`);
          } else {
               res.status(200).send("done");
          }
     });
});

app.post('/login', (req, res) => {
     const { username, password } = req.body;

     const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
     connection.query(sql, [username, password], (err, result) => {
          if (err) {
               console.error(err);
               res.status(500).send('Error checking credentials');
          } else {
               if (result.length > 0) {
                    // User found, credentials are valid
                    res.status(200).send('done');
               } else {
                    // No user found with provided credentials
                    res.status(401).send('error');
               }
          }
     });
});

app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
});
