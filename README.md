MERN SETUP

1. Set up Mongodb

2. Create a .gitignore file and add node_modules/ to the file .

3. Run git init in project root directory.

Install dependences

1. npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request

2. npm i -D nodemon concurrently

3. Make the following file, server.js, in the root directory.

--This is the content of the server.js file--

const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

--Modify package.json--
1. Repalace "test" with:
- "start": "node server", 
and add:
- "server": "nodemon server"

--Start Server--
1. npm run serever

Then go to postman and run a GET http://localhost:5000 and SEND.
Should get API Running