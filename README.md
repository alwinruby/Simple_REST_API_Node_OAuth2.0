# A Simple REST APIBuilt with Node and  OAuth 2.0

Taken from [here](https://www.sitepoint.com/build-a-simple-rest-api-with-node-and-oauth-2-0/)

Also referenced [here](https://developer.okta.com/blog/2018/08/21/build-secure-rest-api-with-node)


## The database file


The Sequelize function creates a database. This is where you configure details, such as what dialect of SQL to use. For now, use SQLite to get up and running quickly.


Once you’ve created the database, you can define the schema for it using database.define for each table. Create a table called parts with a few useful fields to keep track of parts. By default, Sequelize also automatically creates and updates id, createdAt, and updatedAt fields when you create or update a row.

Epilogue requires access to your Express app in order to add endpoints. However, app is defined in another file. One way to deal with this is to export a function that takes the app and does something with it. In the other file when we import this script, you would run it like initializeDatabase(app).

Epilogue needs to initialize with both the app and the database. You then define which REST endpoints you would like to use. The resource function will include endpoints for the GET, POST, PUT, and DELETE verbs, mostly automagically.

To actually create the database, you need to run database.sync(), which returns a Promise. You’ll want to wait until it’s finished before starting your server.

The module.exports command says that the initializeDatabase function can be imported from another file.

## Create an Authorisation Server


The API will

    * Authenticate and authorise your users
    * Store data about your users
    * Perform password-based and social login
    * Secure your application with multi-factor authentication
    * And much more! Check out our product documentation
