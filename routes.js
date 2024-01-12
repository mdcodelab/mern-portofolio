const express = express();
const router = express.Router();
const Message=require("./schema");

router.get("/", async (req, res) => {
  try {
    const messages = await Message.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send(error.messages);
  }
});

// Create message
router.post("/", async (req, res) => {
  const { content} = req.body;
  try {
    const message = await Message.create({
      content,
      time
    });
    res.status(201).json({ content, time});
    console.log(req.body.message);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports=router;



