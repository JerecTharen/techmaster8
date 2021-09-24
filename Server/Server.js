const express = require('express');
const bodyParser = require('body-parser');
const Character = require('./Character/Character.js');
// import Character from './Character/Character.js';

const server = express();
const port = 3030;

//Setup middle-ware
server.use(bodyParser.urlencoded({ extended: true }));

//Characters
let pc = new Character(10, 6, 'Player');
let npc = new Character(4, 2, 'Enemy');

server.listen(port, ()=>{
    console.log('listening on port: ', port);
});

server.get('/test', (req, resp)=>{
    resp.send('testing 123');
});

//TODO: Set up get for react application

//TODO: Return new character
server.get('/player', (req, resp) =>{
    resp.send(JSON.stringify(pc));
});
server.post('/castFireball', (req, resp) => {
    //TODO: Determine if form parameters will be stored on the req variable or in the url
    console.log('received fireball request body', req.body);

    //TODO: Call fireball method on player

    //TODO: Make sure fireball damages enemy

    //TODO: Change this to return array of characters for the react application to use
    resp.send(`Fireball cast, enemy player health is at: ${npc.Health}`);
});

//TODO: Change state of character and return the update