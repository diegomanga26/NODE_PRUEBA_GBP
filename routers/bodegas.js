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
            console.log(data);
        }
    )
});

export default appBodegas;