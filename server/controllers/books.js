const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'book_monk'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting to DB');
        return;
    }
    console.log('Coonected to DB successfully');
});


module.exports = {
    getBooks: async (req, res, next) => {
        try {
            let sql = 'SELECT id, name, image, author, price FROM books';
            connection.query(sql, (err, result) => {
                if (err) {
                    console.log(err)
                    res.status(200).json({ "success": "false" })
                }
                else {
                    res.status(200).json(result)
                }
            });
        } catch (err) {
            console.log(err);
        }
    },
    getBookInfo: async (req, res, next) => {
        try {
            let sql = `SELECT * FROM books where id="${req.query.id}"`;
            connection.query(sql, (err, result) => {
                if (err) {
                    console.log(err)
                    res.status(200).json({ "success": "false" })
                }
                else {
                    res.status(200).json(result)
                }
            });
        } catch (err) {
            console.log(err);
        }
    }
}