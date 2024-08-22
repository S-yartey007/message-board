import { Router } from "express";
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
      },
      {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
      },
      {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
      },
      {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
      }
]

const router = Router();

router.get("/",(req,res) => {
    res.render("index",{title:"mini Messageboard",messages})
})

router.get("/new",(req,res)=> {
    res.render("form",{})
})

router.post("/new",(req,res)=> {
    messages.push({text: req.body.message, user: req.body.name, added: new Date()})
    res.redirect("/")
})


export default router;