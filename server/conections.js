import mysql from 'mysql2';

const conection = mysql.createPool({
        host: "localhost",
        user: "campus",
        password: "campus2023",
        database: "mibodeguita",
        port: 3306
});

export default conection;