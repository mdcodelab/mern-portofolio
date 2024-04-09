const express = require("express");
const router = express.Router();
const Message = require("./schema");

router.get("/", async (req, res) => {
  try {
    const messages = await Message.find({});
    res.status(200).json(messages);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Create message
router.post("/", async (req, res) => {
  const { content } = req.body;
  const author = content.charAt(0) === "9" ? "Mihaela" : "You";
  const time = new Date().toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  try {
    const message = await Message.create({
      content: content.charAt(0) === "9" ? content.slice(1) : content, 
      time,
      author,
    });
    res.status(201).json({ message });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
