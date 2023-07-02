const express = require('express');
const StudentReg = require("../models/student");

const router = new express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Hi I am a student.</h1>");
});

router.post("/student", async (req, res) => {
  try {
    console.log(req.body);
    const newStudent = new StudentReg(req.body);
    const result = await newStudent.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/student", async (req, res) => {
  try {
    const studentData = await StudentReg.find({});
    res.status(200).send(studentData);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await StudentReg.findById(_id);
    res.send(studentData);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudentData = await StudentReg.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    res.send(updateStudentData);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteStudentData = await StudentReg.findByIdAndDelete(_id);
    res.send(deleteStudentData);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;