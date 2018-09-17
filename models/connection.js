const Sequelize = require('sequelize');

//  Database credentials
//  JawsDB
const creds = {
    hostname: 'ofcmikjy9x4lroa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    username: 'yclri6qaaeke5kin',
    password: 'fic5dispfm57b8xz',
    dbName: 'nbd25ufqam725bhl',
};

//  Connection to database
const connection = new Sequelize(creds.dbName, creds.username, creds.password, {
    host: creds.hostname,
    dialect: 'mysql',
    logging: false, // turns off logging SQL queries in console.
    operatorsAliases: 'false',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    define: {
        freezeTableName: true,
        timestamps: true,
    },
});

//  Authentication test
connection.authenticate()
    .then(() => {
        console.log('Database connection has been established.');
    })
    .catch( (err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = connection;