import express from "express"
import path from "path";
import url from 'url';
import 'dotenv/config.js'
import homeRouter from "./routes/homeRouter.js";

const port = process.env.PORT;
const app = express()

//Getting the dirname
const filePath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(filePath)

//Setting the views
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs");

//Serving Static Assests
const assetsPath = path.join(__dirname,"public");
app.use(express.static(assetsPath));

//middleware
app.use(express.urlencoded({extended: true}))
app.use("/",homeRouter);


app.listen(port,()=> {
    console.log(`Express connected at port : ${port}`)
})