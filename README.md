## MERN Backend Setup

1. Set up MongoDB Atlas

2. Create a `.gitignore` file and add `node_modules/` to the file.

3. Initialize the git repository `git init` in the project root directory.

4. Create a `README.md` file.

### Install dependencies: 

1. `npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request`
- `express`: Main web frame for the backend.
- `express-validator`: Used for data validation. Will raise errors.
- `bcryptjs`: Used for password encryption.
- `config`: global variables.
- `gravatar`: Profile avatars 
- `jsonwebtoken`: Using JWT to pass a token for validation.
- `mongoose`: Used to interact with database. 
- `request`: Module to allow HTTP requests to API's. Installed for the GitHub repository profiles to be listed for the backend.

### Install nodemon and concurrently
1. `npm i -D nodemon concurrently`
- `nodemon` watches the server for any changes and automatically makes changes.
- `concurrently` will allow the backend Express server and frontend React dev server at the same time.

### Make the following file, `server.js`, in the root directory.

- This is the content of the server.js file

    const express = require('express'); _// Bring in Express_

    const app = express(); _// Entialize app varialble with express_

    app.get('/', (req, res) => res.send('API Running')); _// End point for testing_

    const PORT = process.env.PORT || 5000; _// App varialble listining on a PORT_

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); _// PORT varialbe_

### Create Main Entry File in the root directory:
- `server.js` Add the following code to the file.

    _const express = require('express');_

    _const app = express();_

    _app.get('/', (req, res) => res.send('API Running'));_

    _const PORT = process.env.PORT || 5000;_

    _app.listen(PORT, () => console.log(`Server started on port ${PORT}`));_

### Modify package.json scripts
1. Re-palace `"test": \"Error: no test specified\" && exit 1` with:
- `"start": "node server"`

and add:
- `"server": "nodemon server"` used for development.

### Start Server
- `npm run server`

Then go to Postman and run a GET http://localhost:5000 and SEND.
You should get the following: `API Running`

# Connect to Database
1. Create a `config` folder in the root directory.
2. Create a `default.json` file in the config folder.
- Copy the connection string from MongoDB Atlas and paste it into the `default.json` file in the config folder.
- Change the password to the password you created for the database.
- Change the database name to the name of the database you created.

![](https://new.express.adobe.com/published/urn:aaid:sc:US:c7df3eee-1d0c-4c71-9542-9bbeab40f7c8)
