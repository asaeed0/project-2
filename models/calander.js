const Sequelize = require('sequelize');
const connection = require('./connection');

const calander = connection.define('calander', {
    calander_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        validate: {},
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {},
    },
    day: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {},
    },
    day_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {},
    },
    week: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {},
    },
    month: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {},
    },
    month_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {},
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {},
    },
    room_1_status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'vacant',
        validate: {},
    },
    room_1_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {},
    },
    room_2_status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'vacant',
        validate: {},
    },
    room_2_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {},
    },
    room_3_status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'vacant',
        validate: {},
    },
    room_3_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {},
    },
    room_4_status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'vacant',
        validate: {},
    },
    room_4_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {},
    },
    room_5_status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'vacant',
        validate: {},
    },
    room_5_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {},
    },
}, {underscored: true});

module.exports = calander;