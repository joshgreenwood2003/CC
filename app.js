const express = require('express');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const app = express();
const data = require('./SiteData.json');
app.use(express.static('client'));

app.get('/Tally', function (req, res) {
    res.send(data);
});

app.post('/Chris', function (req, res) {
    data.chris++;
    fs.writeFileSync('./SiteData.json', JSON.stringify(data));
    res.end();
});
app.post('/Connor', function (req, res) {
    data.connor++;
    fs.writeFileSync('./SiteData.json', JSON.stringify(data));
    res.end();
});


module.exports = app;
