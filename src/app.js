const express = require("express");
require("./db/conn");
// const StudentReg = require("./models/student");
const studentRouter = require("./routers/student");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(studentRouter);

// app.post("/student", (req, res) => {
//   console.log(req.body);
//   const newStudent = new StudentReg(req.body);
//   newStudent
//     .save()
//     .then(() => {
//       res.status(201).send(newStudent);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
