const connection = require('../models/dbconnection');

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