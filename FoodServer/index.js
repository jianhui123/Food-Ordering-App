const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: ['http://localhost:4200']
}));
const port = 5000;
app.use(express.json());
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "menu"
});

con.connect();  
app.get(`/list`,(req , res) =>{
    con.query(`
        select * from food_item       
    `,(err, result) => {
        res.send({data:result});
    })
})

app.listen(port,() => console.log(`Server is listening on port ${port}`));