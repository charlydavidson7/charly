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
const err = false
function addPost (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (err)
      // eslint-disable-next-line prefer-promise-reject-errors
      {
        reject()
      } else { resolve(postData.push(data)) }
    }, 5000)
  })
}
// Promises
/* addPost({ id: 3, name: 'Abijith' }).then(getPost).catch(() => {
  console.log('Error occured')
}) */

// await async

async function trigger () {
  await addPost({ id: 3, name: 'Abijith' })
  getPost()
}
trigger()

module.exports = { trigger, addPost, getPost, err, postData }
