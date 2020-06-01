# :books: Book Monk

Building a online book store 

## :arrow_right: Technologies Used:

:one: Node

:two: Express

:three: React + Redux

:four: MySQL


## :arrow_right: Get Started

Clone the repository

`git clone https://github.com/sureshmangs/Book-Monk.git`

In the project directory(Book-Monk)

`npm install`

In the client directory

`npm install`

In the root directory, inside the server/.env file, set the following fields
```
module.exports = {
JWT_SECRET='xxxxxxxxxxxxxxxxxx'
CLIENT_ID='xxxxxxxxxxxxxxxxxxx Google OAuth Client ID xxxxxxxxxxxxxxxxxxxxxx'
CLIENT_SECRET='xxxxxxxxxxxxxxxxxx Google OAuth Secret Id xxxxxxxxxxxxx'
STRIPE_SC_KEY='xxxxxxxxxxxxxxxxxx Stripe Secret Key xxxxxxxxxxxxx'
MAILJET_PUBLIC_KEY='xxxxxxxxxxxxxxxxxx MailJet Public Key xxxxxxxxxxxxx'
MAILJET_SECRET_KEY='xxxxxxxxxxxxxxxxxx MailJet Secret Key xxxxxxxxxxxxx'
}
```

In the client directory, inside the ./src/config/keys.js file, set the following fields
```
module.exports = {
    CLIENT_ID: 'xxxxxxxxxxxxxxxxxxx Google OAuth Client ID xxxxxxxxxxxxxxxxxxxxxx',
     STRIPE_PS_KEY: 'xxxxxxxxxxxxxxxxxx Stripe Public Key xxxxxxxxxxxxx'
}
```

Import the book_monk.sql( stored inside server/models/book_monk.sql) into your MySQL database or create your own Database


To run the application, in the root dirctory

`npm run start-dev`


## :arrow_right: Demo


HomePage


![alt text](./Demo/HomePage.gif "Homepage")


Login


![alt text](./Demo/Login.gif "Login")


Add to Cart and Checkout


![alt text](./Demo/Demo.gif "Cart")



## :arrow_right: License

MIT License

Copyright (c) 2020 Suresh Mangs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
