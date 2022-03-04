const express = require('express'); //Подключение express



const app = express(); // Создали приложение express
const server = require('http').Server(app); // Создали сервер http
// eslint-disable-next-line react-hooks/rules-of-hooks
const io = require('socket.io')(server); //Создали сокеты

const rooms = new Map();

app.get('/rooms', (req, res) => { //запрос на сервер 9898
    res.json(rooms);
});

io.on('connection', socket => {
    console.log('User connection', socket.id);
})

server.listen(9898, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Сервер запущен');
});