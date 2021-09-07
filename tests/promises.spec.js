const promiseService = require('../services/promises')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const expect = chai.expect
chai.use(sinonChai)

const mockPostData = [{
  id: 1, name: 'Arun'
}, { id: 2, name: 'Abu' }]
const addNewData = { id: 3, name: 'Abijith' }

it('should call getPost method', () => {
  promiseService.postData = mockPostData
  promiseService.getPost()
  expect(promiseService.postData.length).to.be.eql(2)
})

it('should call addPost method with error', () => {
    promiseService.err = true
    promiseService.addPost().then(result => {
       expect(result.length).to.be.eql(3)
   })
})
