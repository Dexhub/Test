const mysql = require('mysql');

const con = mysql.createConnection({
  host: `${process.env.MYSQL_HOST}`,
  user: 'root',
  password: 'root',
  database: 'poc',
});

con.connect((err) => {
  if (err) throw err;
  console.log('Databse Connected!');
});
module.exports = con;
