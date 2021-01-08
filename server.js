const express = require('express');
const app = express();
const socket = require('socket.io')
const port = 5000;

const server = app.listen(5000,()=>{
    console.log('you are connected to your server')
})
app.set('view engine','ejs')
app.use(express.static('public'))
app.get('/index',(req,res)=>{
    res.render('index')
})

const io = socket(server);
 io.on('connection',(socket)=>{
     console.log('Your are using socket.io now',socket.id);
     socket.on('chat',(data)=>{
         io.sockets.emit('chat',data)
     })
     socket.on('detect',data=>{
         socket.broadcast.emit('detect',data)
     })
 })