import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();

const Port = process.env.PORT;

app.listen(Port, ()=>{
    console.log(`Server is connected with Port : ${Port}`);
})