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

In the root directory, inside the .env file, set the following fields
```
module.exports = {
    JWT_SECRET: "XXXXXXXXXXXXXXXXXXX",
    CLIENT_ID: "XXXXXXXXXXXXXXXXXXXXXXXXXXXGoogle_OAuthXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    CLIENT_SECRET: "XXXGoogle_OAuthXXXXXXXX"
}
```

In the client directory, inside the ./src/config/keys.js file, set the following fields
```
module.exports = {
    CLIENT_ID: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXGoogle_OAuthXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
}
```


To run the application, in the root dirctory

`npm run start-dev`
