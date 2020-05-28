const JWT = require('jsonwebtoken');
const connection = require('../models/dbconnection');
const dotenv = require('dotenv');
dotenv.config();

signToken = user => {
    return JWT.sign({
        iss: 'Suresh',
        sub: user.id,
        iat: new Date().getTime(), // current time
        exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
    }, process.env.JWT_SECRET);
}

module.exports = {
    googleOAuth: async (req, res, next) => {
        // Generate token
        console.log('In google auth');
        const token = signToken(req.user);
        res.status(200).json({ token });
    },

    checkAuth: async (req, res, next) => {
        console.log('We managed to get here!');
        res.json({ success: true });
    },

    newsletter: async (req, res, next) => {
        const email = req.body.email;
        let sql = `SELECT email from newsletter where email="${email}"`;
        connection.query(sql, (err, result) => {
            if (err) {
                console.log('error occured ', err)
            }
            else {
                if (result) {
                    res.status(200).json({ "msg": "email already exists in newsletter" })
                } else {
                    try {
                        let insertQuery = `INSERT INTO newsletter (email) values (?)`;
                        connection.query(insertQuery, [email], function (err, rows) {
                            if (err) {
                                console.log('error occured ', err)
                            }
                            res.status(200).json({
                                "msg": "email added to newsletter"
                            })
                        });
                    } catch (err) {
                        console.log('error occured', err);
                    }
                }
            }
        })
    },

    fetchUserProfile: async (req, res, next) => {
        const id = req.body.id;
        let sql = `SELECT * from users where id="${id}"`;
        connection.query(sql, (err, result) => {
            if (err) {
                console.log('error occured ', err)
            }
            else {
                res.status(200).json(result)
            }
        })
    }

}

