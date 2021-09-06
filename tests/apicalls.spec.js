/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const appiCallService = require('../services/apicalls-service')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const expect = chai.expect
chai.use(sinonChai)
const express = require('express')

const mockCourse = [{
  id: 1, name: 'CSE'
}, { id: 2, name: 'ECE' }, { id: 3, name: 'Mech' }]
describe('the apicalls functions will call', () => {
  it('should add a new course', () => {
    appiCallService.Courses = mockCourse
    const newCourse = { id: 4, name: 'Civil Eng' }
    const result = appiCallService.addNewCourse(newCourse)
    expect(result.length).to.equal(4)
  })
  it('should get the selected course', () => {
    appiCallService.Courses = mockCourse
    const selectedCourseId = { params: { id: 1 } }
    const result = appiCallService.getSelectedCourses(selectedCourseId)
    console.log(result)
    expect(result.id).to.be.eq(1)
    expect(result.name).to.be.equals('CSE')
  })
  it('should get all the course', () => {
    appiCallService.Courses = mockCourse
    const result = appiCallService.getAllCourses()
    expect(result.length).to.equal(4)
  })
})
