const http = require('http').createServer()

const io = require('socket.io')(http, {
    cors: { origin: "*" }
})

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (socket) => {
        console.log(message);
        io.emit('message', `${socket.id.substr(0, 2)} said ${message}`)
    })
})

http.listen(4000, () => console.log('listening on PORT 4000'))