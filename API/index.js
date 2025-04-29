import express from "express";
import Entry from "./db.js";
import cors from "cors";
import { validSubmit } from "./auth.js";
const app = express();
app.use(express.json());
app.use(cors());
app.post('/register', async (req, res)=>{
const {success} = validSubmit.safeParse(req.body);
if(!success)
{
    return res.status(400).json({
        err: "bad request sent!",
        msg: "Could not register!"
    });
}
const dbResponse = await Entry.create(req.body);
if(dbResponse._id){
    return res.status(201).json({
        msg: "Registration Successful!"
    })
}
});


app.get("/entries", async(req, res)=>{
try{

    const entries = await Entry.find({});
    return res.status(200).json({
        msg: "success",
        entries
    })
}
catch(e){
return res.status(500).json({msg: "internal server error",
    error: e
})
}
})
app.listen(3000, ()=>{
    console.log("Server started by a handsome guy! on port 3000");
})