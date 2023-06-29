const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv=require("dotenv").config();

connectDb();

const app =express();

const port = process.env.PORT || 3000;

//To send it in json format
//example
// {
//     "message": "Get all contacts"
 // }

//  app.get("/api/contacts",(req,res)=>{
//     res.status(200).json({message: "Get all contacts"});
// })

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})