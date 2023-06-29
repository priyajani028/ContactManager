Created all CRUD APIs of the contacts and one can use the contacts API and manage contact based on the user (register user, login user , and once user is logged in, he/she can create, update, delete contacts and can manage it  ).

Starting point: 

```
npm init
```

To install all dependencies:

```
npm i 
```

```
npm i express, mongoose, dotenv, express-async-handler, jsonwebtoken , bcrypt
```

To run:

```
npm run dev
```

- Used Thunderclient (instead of Postman to avoid switching tabs) : To test client APIs (http://localhost:5001/)

- Created "controllers" that contain all logic for request responses. It will be connected to databases.

- To accept some data for our client to server, we need a body parser that will parse the stream of data that will be received from our client.

To do that, a middleware can be used. Express provides a middleware for json object which we can get it from client.

```
app.use(express.json());
```

- Whenever we interact with mongodb, we get a promise and in order to resolve a promise, we can use "async await". But for that we need to add try-catch block. We can handle that by using a middleware to make the things simpler. It will handle the exceptions under async routes and will parse them to the express error handler.


## **Authentication**

- Provide some endpoints, which will help user to register them so that they can login and use access token so that they can manage their contacts.


