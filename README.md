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

![](https://i.imgur.com/gHrWhzX.jpg)

- Change the password to the password you created for the database.

### Create a `db.js` file in the config folder.
- Add the following code to the `db.js` file.

    const mongoose = require('mongoose'); _// Bring in mongoose_

    const config = require('config'); _// Bring in config_

    const db = config.get('mongoURI'); _// Bring in mongoURI from default.json_

    const connectDB = async () => { _// Create a variable to connect to the database_

    try { _// Try to connect to the database_

    await mongoose.connect(db, { _// Use mongoose to connect to the database_

    useNewUrlParser: true, _// Use the new URL parser_

    }); _// End of await mongoose.connect_

    console.log('MongoDB Connected...'); _// If connected, console log_

    } catch(err) { _// If not connected, console log the error_

    console.error(err.message); _// Console log the error message_

    process.exit(1); _// Exit process with failure_

    } _// End of try catch_

    } _// End of connectDB_

    module.exports = connectDB; _// Export connectDB_

### Creat Routes
1. Create a _routes_ folder in the root directory. Within the _routes_ folder create an _api_ folder and add the following routes:
- auth.js
- posts.js
- profile.js
- users.js
  
The code within them will be used for testing purposes. 
2. Within each _routes_ file add the following:
  - auth.js
    
  ![](https://i.imgur.com/Bj3tQIe.png)
  - posts.js
    
  ![](https://i.imgur.com/2pRlUSo.png)
  - profile.js

 ![](https://i.imgur.com/YWA6odq.png)
  - users.js
    
 ![](https://i.imgur.com/vJds4OW.png)

 ### Create a `models` folder in the root directory.
 - Create a _User.js_ file with a capital 'U' in the `models` folder.
  
