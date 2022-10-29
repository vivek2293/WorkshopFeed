const express = require("express");
const app = express();
const cors = require("cors");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const path = require('path');
const publicPath = __dirname;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(publicPath, "..", "build")));
console.log(path.join(publicPath, "..", "build"));


app.get("*", (req,res) => {
  res.sendFile(path.join(publicPath, ".." ,"build" ,"index.html"));
})

app.use("/", tasks);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
