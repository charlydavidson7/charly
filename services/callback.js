/* eslint-disable brace-style */
/* eslint-disable prefer-promise-reject-errors */

const postData = [{
  id: 1, name: 'Arun'
}, { id: 2, name: 'Abu' }]

function getPost () {
  setTimeout(() => {
    console.log(postData)
  }, 3000)
}
function addPost (data, callback) {
  setTimeout(() => {
    postData.push(data)
    callback()
  }, 5000)
}

addPost({ id: 3, name: 'Abijith' }, getPost)
