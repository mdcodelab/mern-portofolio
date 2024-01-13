const express = require("express");
const app = express();
require("dotenv").config();
const cors=require("cors");
const router = require("./routes");
const connectDB=require('./connectDB');


app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

app.get("/", (req, res) => {
    res.send("Home page");
});

const port = process.env.PORT || 4000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("db connected");
        app.listen(port, () =>
          console.log(`Server is listening at port ${port}`)
        );
        
    } catch (error) {
        console.log(error);
    }
}

start();


