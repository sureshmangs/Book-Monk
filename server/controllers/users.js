const JWT = require('jsonwebtoken');
const connection = require('../models/dbconnection');
const { uuid } = require('uuidv4');
const dotenv = require('dotenv');
dotenv.config();

const stripe = require('stripe')(process.env.STRIPE_SC_KEY);



signToken = user => {
    return JWT.sign({
        iss: 'Suresh',
        sub: user.id,
        iat: new Date().getTime(), // current time
        exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
    }, process.env.JWT_SECRET);
}




sendOrderdetail = (msgToBeSend, user) => {
    const mailjet = require('node-mailjet')
        .connect(process.env.MAILJET_PUBLIC_KEY, process.env.MAILJET_SECRET_KEY)
    const request = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [
                {
                    "From": {
                        "Email": "sureshmangs3@gmail.com",
                        "Name": "Book Monk"
                    },
                    "To": [
                        {
                            "Email": user.email,
                            "Name": user.name
                        }
                    ],
                    "Subject": "Order Confirmation Book Monk",
                    "TextPart": "Do not reply",
                    "HTMLPart": msgToBeSend,
                    "CustomID": "Book Monk"
                }
            ]
        })
    request
        .then((result) => {
            console.log('Email sent to ', user.email)
            //console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        })
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
        try {
            let sql = `SELECT * from users where id="${id}"`;
            connection.query(sql, (err, result) => {
                if (err) {
                    console.log('error occured ', err)
                }
                else {
                    res.status(200).json(result)
                }
            })
        } catch (err) {
            console.log('error occured ', err)
        }
    },





    editUserProfile: async (req, res, next) => {
        const user = req.body.user;
        try {
            let sql = `UPDATE users SET name="${user.name}", phone="${user.phone}", add_house="${user.house}", add_street="${user.street}",  add_city="${user.city}",  add_state="${user.state}",  add_country="${user.country}",  add_pincode="${user.pincode}"  where id="${user.id}" `;
            connection.query(sql, function (err, rows) {
                if (err) {
                    console.log('error occured ', err)
                }
                let sql = `SELECT * from users where id="${user.id}"`;
                connection.query(sql, (err, result) => {
                    if (err) {
                        console.log('error occured ', err)
                    }
                    else {
                        res.status(200).json(result)
                    }
                })
            });
        } catch (err) {
            console.log('error occured', err);
        }
    },





    makePayment: async (req, res, next) => {
        const { user, payableAmt, items, token } = req.body;
        const idempotencyKey = uuid()

        let orderDetail = '';
        items.map((item) => {
            return (
                orderDetail += `<tr>
                <td class="border-0 align-middle text-center">
                    <div class="p-2 px-3 ">${item.book.name}</div>
                </td>
                <td class="border-0 align-middle text-center">
                    <div class="p-2 px-3 ">₹ ${item.book.price}</div>
                </td>
                <td class="border-0 align-middle text-center">
                    <div class="p-2 px-3 ">${item.quantity}</div>
                </td>
            </tr>`
            )
        })



        let msgPart1 = `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                        <meta charset="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <title>Book Monk</title>
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                        </head>
                        <body>
                        <div id="root">
                        <div class="container m-5">
                        <h2 class="text-center mb-5"><i class="fa fa-book text-dark "></i> <span style="color:orange;" >Book Monk</span></h2>
                        <p class="font-italic">Greetings from Book Monk.</p>
                        <p class="font-italic">Your order has been confirmed and will be delivered to you within 3 buisness days.</p>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                        
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="border-0 bg-light">
                                                        <div class="p-2 px-3 text-uppercase text-center">Book</div>
                                                    </th>
                                                    <th scope="col" class="border-0 bg-light">
                                                        <div class="py-2 text-uppercase text-center">Price</div>
                                                    </th>
                                                    <th scope="col" class="border-0 bg-light">
                                                        <div class="py-2 text-uppercase text-center">Quantity</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>`;

        let msgPart2 = `</tbody>
                        </table>
                    </div>
                </div>
                </div>
                </div>
                <p class="font-italic">For more info contact info@bookmonk.com</p>
                </div>
                </div>
                </body>
                </html>`;


        let msgToBeSend = msgPart1 + orderDetail + msgPart2;



        try {
            return stripe.customers.create({
                email: token.email,
                source: token.id
            }).then(customer => {
                stripe.charges.create({
                    amount: payableAmt * 100,
                    currency: 'INR',
                    customer: customer.id,
                    receipt_email: token.email,
                    description: `Purchase of books from Book Monk`,
                }, { idempotencyKey })
            }).then(async (result) => {

                // save order data to DB

                let book = items.map((item, index) => {
                    return {
                        "item": item.book.name,
                        "price": item.book.price,
                        "quantity": item.quantity
                    }
                })
                book = JSON.stringify(book);
                let today = new Date();
                let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                let delivery = user.add_house + ', ' + user.add_street + ', ' + user.add_city + ', ' + user.add_state + ', ' + user.add_country + ', ' + user.add_pincode;


                try {
                    let insertQuery = `INSERT INTO orders (user_id, items, amount, date, time, delivery, phone) values (?, ?, ?, ?, ?, ?, ? )`;
                    await connection.query(insertQuery, [user.id, book, payableAmt, today, time, delivery, user.phone], function (err, rows) {
                        if (err) {
                            console.log('error occured ', err)
                        }
                        console.log('order added to DB');
                    });
                } catch (err) {
                    console.log('error occured', err);
                }


                // send order details to the user
                await sendOrderdetail(msgToBeSend, user);
                console.log('payment is successfull')

                res.status(200).json({
                    "success": true
                })
            })
                .catch(err => console.log('error occured ', err))
        } catch (err) {
            console.log('error is ', err)
        }
    },

    getUserOrders: async (req, res, next) => {
        const id = req.body.id;
        try {
            let sql = `SELECT * from orders where user_id="${id}"`;
            connection.query(sql, (err, result) => {
                if (err) {
                    console.log('error occured ', err)
                }
                else {
                    res.status(200).json(result)
                }
            })
        } catch (err) {
            console.log('error occured ', err)
        }
    },

}

