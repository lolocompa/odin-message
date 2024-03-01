var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: 1,
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: 2,
    added: new Date(),
  },
  {
    text: "how are you",
    user: 1,
    added: new Date(),
  },
  {
    text: "all good",
    user: 2,
    added: new Date(),
  },
  {
    text: "glad to hear that",
    user: 1,
    added: new Date(),
  },
];

var current_user = 1;

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(messages);
  res.render("index", { title: "Message board", messages: messages });
});

router.post("/new", function (req, res, next) {
  let text = req.body.text;
  current_user === 1 ? (current_user = 2) : (current_user = 1);

  messages.push({ text: text, user: current_user, added: new Date() });
  res.redirect("/");
});

module.exports = router;
