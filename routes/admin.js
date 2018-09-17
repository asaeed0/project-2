const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    // console.log(`Request on '/' at: `, Date(Date.now() * 1000));
    next();
});

router.get('/', (req, res) => {
    res.render('dashboard', {layout: 'admin'});
});

router.get('/login', (req, res) => {
    res.render('login', {layout: 'admin-blank'});
});

router.get('/reservations', (req, res) => {
    res.render('reservations', {layout: 'admin'});
});

module.exports = router;