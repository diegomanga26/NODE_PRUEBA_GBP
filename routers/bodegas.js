import {Router} from 'express';
import conection from '../server/conections.js';
const appBodegas = Router();

appBodegas.use((req, res, next)=>{
    (conection)?next():res.status(500).send("Conexión a la base de datos fallida.");
});
/**
 * ! METODO GET DEL CRUD.
 */
appBodegas.get("/", (req, res)=>{
    conection.query(
        `SELECT * FROM bodegas ORDER BY nombre`,
        (err, data, fils)=>{
            res.send(data);
        }
    )
});
/**
 * ! METODO POST DEL CRUD.
 */
appBodegas.post("/", (req, res)=>{
    conection.query(
        /*sql*/`INSERT INTO bodegas SET ?`,
        req.body,
        (err, data, fils)=>{
            data.affectedRows +=200;
            let resultado = req.body;
            resultado.id=data.insertId;
            res.status(data.affectedRows).send(resultado);
        }
    )
});

export default appBodegas;