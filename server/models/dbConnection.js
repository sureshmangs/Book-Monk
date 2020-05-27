const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'book_monk'
// });

const connection = mysql.createPool({
    connectionLimit: 10, // default = 10
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'book_monk'
});

// try {
//     connection.connect(function (err) {
//         if (err) {
//             console.error('error connecting to DB');
//             return;
//         }
//         console.log('Coonected to DB successfully');
//     });
// } catch (err) {
//     console.log('error occured while connect DB', err)
// }


module.exports = connection;