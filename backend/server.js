const express = require("express");
const app = express();
const mongoDB = require("./db");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Include the allowed methods
  next();
});

mongoDB()
  .then(() => {
    console.log("Database operation completed successfully.");
  })
  .catch((error) => {
    console.error("An error occured during database connection");
  });

app.use(express.json());

//student login
app.use("/api", require("./Routes/StudentLogin"));
//student Signup
app.use("/api", require("./Routes/StudentSignUp"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000);
