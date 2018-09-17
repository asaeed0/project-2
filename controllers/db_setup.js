const Rooms = require('../models/rooms');
const Reservations = require('../models/reservations');
const Calander = require('../models/calander');

//  Setup Data
const calander = require('../data/calander.js');

Rooms.sync()
    .then(() => {
    console.log('Rooms Sync Successful!');
    });

Reservations.sync()
    .then(() => {
    console.log('Reservations Sync Successful!');
    });

Calander.sync()
    .then(() => {
    console.log('Calander Sync Successful!');
    });

Calander.bulkCreate(calander)
    .then( () => {
        console.log('Calander bulk create successful!');
    })
    .catch( (err) => {
        console.log(err);
    });
