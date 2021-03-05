const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const categoryRoutes = require('./routes/category');
const articleRoutes = require('./routes/article');
const commentRoutes = require('./routes/comment');
const scrapeRoutes = require('./routes/scrape');
const userRoutes = require('./routes/user');

require('custom-env').env(process.env.NODE_ENV, './config');

mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});

const corsConfig = {
    credentials: true,
    origin: true,
};

var app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', 'http://localhost:3000','http://localhost:4200');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.append('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cors(corsConfig));
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());


console.log(process.env.PORT);

app.use('/categories',categoryRoutes);
app.use('/articles',articleRoutes);
app.use('/comments',commentRoutes);
app.use('/scrapes',scrapeRoutes); 
app.use("/user", userRoutes);

const server = http.createServer(app);

const io = socketIo(server);

var countActiveUsers = 0;
io.on('connection', (socket) => {        
    if (socket.handshake.headers.origin === "http://localhost:3000") {
        countActiveUsers++;        
        socket.broadcast.emit('count', countActiveUsers);     
        console.log(countActiveUsers);          

        socket.on('disconnect', () => {
            countActiveUsers--;                   
            socket.broadcast.emit('count', countActiveUsers); 
            console.log(countActiveUsers);           
        });
    }   
}); 


server.listen(process.env.PORT);
