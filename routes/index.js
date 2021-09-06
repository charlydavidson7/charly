const express = require('express')
const router = express()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express App', subTitle: 'A sample Node js App' })
})
/* GET userData page. */
router.get('/user', function (req, res, next) {
  const User = req.query.name
  res.status(200).send(`Wlecome ${User}`)
})

module.exports = router
