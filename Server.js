const express = require('express');

const server = express();
const port = 3000;

server.listen(port, ()=>{
    console.log('listening on port: ', port);
});

server.get('/test', ()=>{
    return 'testing 123';
});

//TODO: Set up get for react application

//TODO: Return new character

//TODO: Change state of character and return the update