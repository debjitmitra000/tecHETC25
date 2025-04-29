import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const mongoURI = process.env.mongo;


await mongoose.connect(`${mongoURI}/techetc`)
.then(()=>{
    console.log("DB connected");
    
}).catch((e)=>{
    console.log("error" + e);
    
})

const registerSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
   },
    phone: {
        type: Number,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    events: {
        type: [String],
        required: true
    }
}, {
    timestamps: true
})


const Entry = mongoose.model("registrations", registerSchema);
export default Entry;