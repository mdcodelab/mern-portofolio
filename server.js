const express = require("express");
const app = express();
const router = require("./routes");


app.use(express.json());

app.use("/api/v1", router);

app.get("/", (req, res) => {
    res.send("Home page");
});

const port = process.env.PORT || 4000;

app.listen(port, ()=> console.log(`Server is listening at port ${port}`));