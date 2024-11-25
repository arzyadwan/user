const mysql = require("mysql2");
//konfig koneksi ke db
const dbConfig = {
    host: "34.101.98.164",
    user: "andi",
    password: "Ari421@&!",
    database: "db_user",
  };
  
  const db = mysql.createConnection(dbConfig);

  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL database:", err);
      return;
    }
    console.log("Connected to MySQL database!");
  });
  

  module.exports = db;