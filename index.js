const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

let messages = [
  { id: 1, text: "Hi there!", user: "Amando", added: new Date() },
  { id: 2, text: "Hello World!", user: "Charles", added: new Date() },
];

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.post("/new", (req, res) => {
  const { user, text } = req.body;
  messages.push({ id: messages.length + 1, text, user, added: new Date() });
  res.redirect("/");
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  const message = messages.find((message) => message.id === Number(id));
  if (message) res.render("message", { message });
  else res.status(404).send("message not found");
});
app.delete("/messages/:id", (req, res) => {
  const id = req.params.id;
  const updatedMessages = messages.filter((message) => message.id != id);
  messages = updatedMessages;
  res.json({ redirect: "/" });
});

app.listen(3000);
