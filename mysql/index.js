const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'poc',
});

con.connect((err) => {
  if (err) throw err;
  console.log('Databse Connected!');
});
module.exports = con;
