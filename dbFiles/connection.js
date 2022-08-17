const mysql = require("mysql"); 
const util = require("util"); 

const connection = mysql.createConnection({
    port: 3306,
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'employees',
  });
