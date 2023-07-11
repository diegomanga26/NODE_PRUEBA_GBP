import {Router} from 'express';
import conection from '../server/conections.js';
const appProductos = Router();

appProductos.use((req, res, next)=>{
    (conection)?next():res.status(500).send("Conexión a la base de datos fallida.");
});
appProductos.get("/", (req, res) => {
  conection.query(
        `SELECT productos.*, SUM(inventarios.cantidad) AS Total FROM productos 
              INNER JOIN inventarios ON productos.id = inventarios.id_producto 
              GROUP BY productos.id 
              ORDER BY Total DESC`,
    (err, data, fils) => {
      console.log(err);
      res.send(data);
    }
  );
});
    
export default appProductos;