
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const path = require('path')
const PORT = 3001

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'))
})
io.on('connection', (sockets) => {
  sockets.emit('welcome', 'Hello Welcome to the socket server')
  sockets.on('thanks', (data) => {
    sockets.broadcast.emit('broadcastData', data)
    console.log(data)
  })
  sockets.on('disconnect', () => { console.log('User Disconnected') })
})

http.listen(3001, () => { console.log(`server is up with port ${PORT}`) })
