const express = require('express');
const path = require('path');
const createDatabase = require('./server/dbs/create-database');
const PORT = 3000;
const app = express();
createDatabase();
const getHello = require('./server/routers/hello');
app.use(express.static(__dirname + '/public'));

app.use('/', getHello);
app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
