const app = require('../app');

//  Controllers
const book = require('../controllers/new_booking');

//  Data for populating handlebars template
const data = {};
data.restaurants = require('../data/restaurants');
data.amenities = require('../data/amenities');
data.rooms = require('../data/rooms');
// data.hotel = require('../data/hotel');

const routes = (app) => {

    //  GET REQUESTS

    app.get('/', (req, res) => {
        res.render('./user/index');
    });

    app.get('/explore', (req, res) => {
        res.render('./user/explore');
    });

    app.get('/rooms', (req, res) => {
        res.render('./user/rooms');
    });

    app.get('/rooms/:room', (req, res) => {
        //  TODO: test to see if req.params.room is a valid room
        //  TODO: if invalid render error page
        let room = data.rooms;
        res.render('./user/room', room);
    });

    app.get('/amenities', (req, res) => {
        res.render('./user/amenities', data);
    });

    app.get('/restaurants', (req, res) => {
        res.render('./user/restaurants', data);
    });

    app.get('/booking', (req, res) => {
        res.render('./user/booking', {layout: 'blank'});
    });

    app.get('/story', (req, res) => {
        res.render('./user/story');
    });

    app.get('/location', (req, res) => {
        res.render('./user/location');
    });

    //  POST REQUESTS

    app.post('/api/booking', (req, res) => {
        
        const reservationForm = req.body;
    /* 
        let booking_result = book(reservationForm);
        if (!booking_result) { 
            res.render('./error/days-taken', {layout: 'blank'});
        } else {
            res.render('./user/cofirmation', {layout: 'blank'}, booking_result);
        }
    */
        res.send(reservationForm);
    });


    // 404 Error handling
    app.use( (req, res, next) => {
        res.status(404).render('./errors/404', {layout: 'blank'});
      });
};


module.exports = routes;