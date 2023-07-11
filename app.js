/**
 * !IMPORTAMOS EXPRESS, appBodegas y DOTENV:
 */
import express from 'express';
import appBodegas from "./routers/bodegas.js";
import appProductos from "./routers/productos.js";
const appExpress = express();
import dotenv from 'dotenv';
dotenv.config();

appExpress.use(express.json());
appExpress.use("/bodegas", appBodegas);

appExpress.use("/productos", appProductos);

let config = JSON.parse(process.env.myConfig);
appExpress.listen(config, ()=>{
    console.log(`Servidor http://${config.hostname}:${config.port}`);
});