const express = require("express");
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res,send("Home page");
});

const port = process.env.port || 4000;

app.listen(port, ()=> console.log(`Server is listening at port ${port}`));