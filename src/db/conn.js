const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/practices",{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to mongoDb successfully");
  })
  .catch((err) => {
    console.log(`Failed to connect with mongoDb. Error: ${err}`);
  });

