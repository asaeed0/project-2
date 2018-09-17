const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* ----------------------------------------------------------
    SCHEMAS
---------------------------------------------------------- */

//  Rooms Data Schema
const rooms = {
    room_id: {
        type: 'number',
    },
    type: {
        type: 'string'
    },
    name: {
        type: 'string',
    },
    size: {
        type: 'string'
    },
    price: {
        type: 'number', 
    },
    description: { 
        type: 'string',
    },
    restrictions: { 
        type:'string',
    },
    guests: {
        type: 'number',
    },
    checkIn_time: {
        type: 'string',
    },
    checkOut_time: {
        type: 'string'
    },
    tagline: {
        type: 'array'
    },
    layout: {
        type: 'array'
    },
    amenities: {
        type: 'array'
    },
    photos: {
        type: 'array'
    },
};

//  Restaurants Data Schema
const restaurants = {
    restaurant_id: {
        type: 'number',
    },
    name: {
        type: 'string'
    },
    brief: {
        type: 'string',
    },
    description: {
        type: 'string'
    },
    cusine: {
        type: 'string', 
    },
    phone: { 
        type: 'string',
    },
    address: { 
        type:'array',
    },
    photos: {
        type: 'object',
    },
    hours: {
        type: 'array',
    },
    menus: {
        type: 'array'
    },
    notes: {
        type: 'array'
    },
};

//  Amenities Data Schema
const amenities = {
    amenity_id: {
        type: 'number',
    },
    name: {
        type: 'string'
    },
    photo: {
        type: 'array',
    },
    icon: {
        type: 'object'
    },
    hours: {
        type: 'array'
    },
    restrictions: {
        type: 'array',
    },
    notes: {
        type: 'array'
    },
};

//  Hotel Data Schema
const hotel = {
    name: {
        type: 'string'
    },
    phone: {
        type: 'string',
    },
    email: {
        type: 'string'
    },
    socialMedia: {
        type: 'array'
    },
    photos: {
        type: 'object',
    },
};



/* ----------------------------------------------------------
    SCHEMAS & MODEL CONSTRUCTION
---------------------------------------------------------- */


//  Schema Constructors
const roomsSchema = new Schema(rooms, { collection: 'rooms' });
const restaurantsSchema = new Schema(restaurants, { collection: 'restaurants' });
const amenitiesSchema = new Schema(amenities, { collection: 'amenities' });
const hotelSchema = new Schema(hotel, { collection: 'hotel' });

//  Model Constructors
const Rooms = mongoose.model('Rooms', roomsSchema);
const Restaurants = mongoose.model('Restaurants', restaurantsSchema);
const Amenities = mongoose.model('Amenities', amenitiesSchema);
const Hotel = mongoose.model('Hotel', hotelSchema);


module.exports = {
    Rooms: Rooms,
    Restaurants: Restaurants,
    Amenities: Amenities,
    Hotel: Hotel,
};