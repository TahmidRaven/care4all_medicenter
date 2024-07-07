import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); 


mongoose
    .connect(process.env.MONGO)
    .then( 
        () => 
            {console.log('MongoDB is connected!')}
        )
    .catch(() => {console.log('MongoDB connection failed!')});
        
const app = express();

app.listen(3000, () => {
    console.log('server listening on port 3000!!');
}); 