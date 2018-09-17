const Sequelize = require('sequelize');
const connection = require('./connection');

const rooms = connection.define('rooms', {
    room_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        validate: {},
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {},
    },
}, {underscored: true});


module.exports = rooms;