MERN SETUP

1. Set up Mongodb

2. Create a .gitignore file and add node_modules/ to the file.

3. Initialize the git repository - git init - in the project root directory.

4. Change the entry point to server.js in package.json. Example: entry point: (index.js) server.js

5. Create a README.md file.

###Install dependencies:###

1. npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request
- express: Main web frame for the backend.
- express-validator: Used for data validation. Will raise errors.
- bcryptjs: Used for password encryption.
- config: global variables.
- gravatar: Profile avatars 
- jsonwebtoken: Using JWT to pass a token for validation.
- mongoose: Used to interact with database. 
- request: Module to allow HTTP requests to API's. Installed for the GitHub repository profiles to be listed for the backend.

2. npm i -D nodemon concurrently

3. Make the following file, server.js, in the root directory.

--This is the content of the server.js file--

const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

--Modify package.json--
1. Re-palace "test" with:
- "start": "node server"

and add:
- "server": "nodemon server"

--Start Server--
1. npm run server

Then go to postman and run a GET http://localhost:5000 and SEND.
Should get API Running
