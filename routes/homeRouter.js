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
    messages.push({ text: req.body.message, user: req.body.name, added: new Date()})
    //console.log(messages)
    res.redirect("/")
})


router.get("/messages/:name",(req,res) => {
/* const message =  messages.forEach(message => {
    if(message.user === req.params.name) return message})
  if(message) res.render("message",{message})
 */
    console.log(req.params.name)
    console.log(messages)
  
const messagesFound = messages.filter(message => message.user === req.params.name)
    if(messagesFound.length >= 0) {
     console.log(messagesFound)
      res.render("message",{messagesFound})
    } else return
})



export default router;
