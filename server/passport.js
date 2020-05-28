const passport = require("passport")
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const GoogleStrategy = require('passport-google-token').Strategy;
const dotenv = require('dotenv');
const connection = require('./models/dbConnection')

dotenv.config();

// JSON Web Token Strategy
passport.use('jwt', new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.JWT_SECRET
}, async (payload, done) => {
    try {
        //find the user specified in the token
        let sql = `SELECT * FROM users where id="${payload.sub}"`;
        await connection.query(sql, (err, result) => {
            if (err) {
                console.log('some error occured ', err)
                // if user doesn't exist handle the scenario
                return done(null, false);
            }
            else {
                // otherwise return the user
                done(null, result);
            }
        });

    } catch (error) {
        done(null, false);
    }
}));





// Google OAuth Strategy
passport.use('googleToken', new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    scope: ['openid', 'email']
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let sql = `SELECT * FROM users where id="${profile.id}"`;
        connection.query(sql, (err, result) => {
            if (err) {
                console.log('error occured ', err)
                done(error, false, error.message);
            }
            else {
                if (result.length) {
                    console.log('user already exists');
                    return done(null, result);
                }
                console.log('creating a new user')
                const newUser = {
                    id: profile.id,
                    name: profile.name.givenName + ' ' + profile.name.familyName,
                    image: profile._json.picture,
                    email: profile.emails[0].value,
                    acc_created: new Date()
                }

                let insertQuery = `INSERT INTO users ( id, name, image, email, acc_created) values (?,?,?,?,?)`;
                connection.query(insertQuery, [newUser.id, newUser.name, newUser.image, newUser.email, newUser.acc_created], function (err, rows) {
                    if (err) {
                        console.log('error occured ', err)
                    }
                    else return done(null, newUser);
                });
            }
        });



    } catch (error) {
        done(error, false, error.message);
    }
}));