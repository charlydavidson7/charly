/* eslint-disable no-unused-expressions */
/* eslint-disable node/handle-callback-err */
const index = require('../routes/index')
const chai = require('chai')
const chaihttp = require('chai-http')

chai.use(chaihttp)

const expect = chai.expect

describe('index page should render', () => {
  it('should render user page', (done) => {
    chai.request(index).get('/').end((_err, res) => {
      expect(_err).to.be.null
      done()
    })
  })
  it('should render getuser page', (done) => {
    chai.request(index).get('/user').query({ name: 'foo', limit: 10 }).end((err, res) => {
      expect(res.status).to.be.eq(200)
      done()
    })
  })
})
