const Sequelize = require('sequelize');
const connection = require('./connection');

const reservations = connection.define('reservations', {
  reservation_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    validate: {},
  },
  confirmation_code: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {},
  },
  room_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {},
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {},
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {},
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {},
  },
  guests: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {},
  },
  children: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {},
  },
  flight: {
    type: Sequelize.STRING,
    validate: {},
  },
  notes: {
    type: Sequelize.TEXT,
    validate: {},
  },
  checkIn_date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {},
  },
  checkOut_data: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {},
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {},
  },
  payment_status: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {},
  },
  checkIn: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {},
  },
  checkedIn_by: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {},
  },
  checkOut: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {},
  },
  checkedOut_by: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {},
  },
}, {underscored: true});


module.exports = reservations;