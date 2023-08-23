const express = require('express');
let morgan = require('morgan')
const server = express();
require('./config/db')
const routing = require('./routes')

server.use(morgan('tiny'))
server.use(express.json());

server.use(routing);

const PORT = process.env.SERVER_PORT || 80;
server.listen(PORT);