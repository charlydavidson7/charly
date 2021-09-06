const async = require('async')

async.waterfall([download, progress, completed], (err, result) => {
  if (err) {
    console.log(err)
  } else console.log('Process Done')
})
function download (callback) {
  console.log('Download Initiated')
  // eslint-disable-next-line node/no-callback-literal
  callback('error')
}

function progress (callback) {
  console.log('Download In Progress')
  callback()
}

function completed (callback) {
  console.log('Download Completed')
  callback()
}
