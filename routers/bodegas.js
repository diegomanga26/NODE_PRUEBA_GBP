import {Router} from 'express';
import mysql from 'mysql2';
const appBodegas = Router();
let conection = undefined;

appBodegas.use((req,res,next)=>{
        conection = mysql.createPool({
            host: "localhost",
            user: "campus",
            password: "campus2023",
            database: "mibodeguita",
            port: 3306
        });
        next();
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