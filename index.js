import * as dotenv from 'dotenv';
import cors from "cors";
import express from "express";
import mongoose from 'mongoose';
import{
    loginRoute,
    signupRoute,
    forgotPasswordRoute,
    passwordResetRoute
} from "./routes/auth.js"

dotenv.config();

const app = express();

const PORT = process.env.PORT;
//const MONGO_URL=process.env.MONGO_URL;

// async function createConnection(){
//     const client=new MongoClient(MONGO_URL);
//     await client.connect();
//     console.log("Mongo is connected😜");
//     return client;
// }

// export const client = await createConnection();

mongoose
   .connect(process.env.MONGO_URL,{useNewUrlParser:true})
   .then(()=>console.log("Mongoose is connected😜"))
   .catch((err)=>console.log(err));

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("This backend has been developed to create signin , signup , password reset pages. Please work with the UI for better understanding")
});

//implementing routes//
app.use("/login",loginRoute);
app.use("/signup",signupRoute);
app.use("/forgotPassword",forgotPasswordRoute);
app.use("/passwordReset",passwordResetRoute);

// Setting the port //

app.listen(PORT,()=>console.log("server is connected on the port",PORT))
