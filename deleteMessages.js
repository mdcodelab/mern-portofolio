const dotenv = require("dotenv");
dotenv.config();
const mongoose=require("mongoose");
const connectDB = require("./connectDB");
const Message = require("./schema");

const destroyMessages = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        await Message.deleteMany();
        console.log("Messages destroy");
    } catch (error) {
        console.log(error);
    }
}

destroyMessages();