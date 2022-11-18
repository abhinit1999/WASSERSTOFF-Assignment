const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()
const DB_URL = process.env.DATA_BASE
mongoose.connect(DB_URL)
.then(()=>
{
    console.log(`mongoose connected`)
})
.catch((e)=>
{
    console.log(e);
})