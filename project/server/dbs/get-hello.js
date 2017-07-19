function getHello(res) {
    const connection = require('./connection');

    connection.query("select * from helloWord2.hello", (err, result) => {
        if (err) {
            console.log(err);
            if (err.errno === 1049) {
            }
        } else {
            console.log(result);
            res.json(result[0].h);
        }
    });
}

module.exports = {
    getHello,
};
