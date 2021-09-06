/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
const express = require('express')
const apicallervice = require('../services/apicalls-service')
const application = express()
application.use(express.json())
application.use(express.urlencoded({ extended: true }))

function postData (req, res) {
  const Courses = apicallervice.addNewCourse(req.body.name)
  if (Courses) {
    res.status(200).send('Data saved successfully')
  } else res.status(400).send('Input Parameter missing')
}
// get selected course
function getCourse (req, res) {
  const selectedCourse = apicallervice.getSelectedCourses(req)
  if (selectedCourse) {
    res.json({
      course: selectedCourse
    })
  } else res.status(404).send('Data not found')
}
// get All courses
function getAllCourses (req, res) {
  const allCourses = apicallervice.getAllCourses()
  res.json({
    courses: allCourses
  })
}

module.exports = { getCourse, postData, getAllCourses }
