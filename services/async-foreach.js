const async = require('async')

function demo () {
  const events = ['Initialization', 'Process', 'Everything']
  async.forEachSeries(events, function (event, callback) {
    process(event, callback)
  }, (err, result) => {
    if (err) {
      console.log(err)
    } else console.log('Process Done')
  })
}
function process (processType, callback) {
  let processTime = 0
  switch (processType) {
    case 'Initialization' :
      processTime = 2000
      break
    case 'Process' :
      processTime = 4000
      break
    case 'Everything' :
      processTime = 500
      break
  }
  setTimeout(function () {
    console.log(`Finished: ${processType}`)
    callback()
  }, processTime)
}
demo()
