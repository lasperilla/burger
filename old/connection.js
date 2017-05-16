const mysql = require("mysql");
const pass = require("./pw.js")

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: pass.pass,
    database: "burgers_db"
});
