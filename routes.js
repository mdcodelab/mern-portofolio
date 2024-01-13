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
  try {
    const message = await Message.create({
      content,
      time: new Date().toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'})
    });
    res.status(201).json({message});
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;