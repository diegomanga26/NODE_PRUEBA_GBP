import "reflect-metadata";
import { plainToClass } from "class-transformer";
import express from 'express';
import {user} from "../controller/bodegas.js";
const middleWare = express();

middleWare.use(express.json());
middleWare.use("/", (req, res)=>{
    try {
        let data = plainToClass(user, req.body);
        console.log(data);
        res.send("Si me sirvió");
    } catch (error) {
        res.send(error);
    }
})

export default middleWare;