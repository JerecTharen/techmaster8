const express = require('express');

const server = express();
const port = 3030;

server.listen(port, ()=>{
    console.log('listening on port: ', port);
});

server.get('/test', (req, resp)=>{
    resp.send('testing 123');
});

//TODO: Set up get for react application

//TODO: Return new character

//TODO: Change state of character and return the update