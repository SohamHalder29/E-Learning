import Express, { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

/*----------------------------------------------------- */
dotenv.config();
const app = Express();
/*----------------------------------------------------- */
app.use(Express.json({limit:"100mb"}));

app.use(cookieParser());

app.use(cors({
    origin: process.env.ORIGIN
}))

app.get("/test", (req:Request, res:Response, next:NextFunction)=>{
    res.status(200).json({
        success: true,
        message: "API is Working",
    })
})

app.get("*", (req:Request, res:Response, next:NextFunction)=>{
    const Err = new Error(`Route ${req.originalUrl} not found`) as any;
    Err.statusCode = 404;
    next(Err);
})

export {app};

