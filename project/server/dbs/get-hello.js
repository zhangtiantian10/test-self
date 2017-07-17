const connection = require('./connection');

function getHello(res){
    connection.connect();
    connection.query("select * from hello", (err, result) => {
        res.json(result[0].h);
    });
    connection.end();
}

module.exports = {
    getHello
};