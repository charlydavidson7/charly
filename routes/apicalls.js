/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
const express = require('express')
const application = express.Router()
application.use(express.json())
application.use(express.urlencoded({ extended: true }))
const apiController = require('../controller/apicalls-controller')

application.post('/user/courses', apiController.postData.bind(apiController))

// get selected course

application.get('/user/courses/:id', (req, res) => {
  apiController.getCourse(req, res)
})

// get All courses

application.get('/user/getAllCourses', (req, res) => {
  apiController.getAllCourses(req, res)
})

module.exports = { application }
