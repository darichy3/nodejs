var mysql = require('mysql');

var db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "admin4myind0",
	database: "petani_kopi"
});
module.exports = db;
