const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "bditens",
})

app.listen(3001, () => {
    console.log("rodando servidor");
});

app.post("/item", (req, res) =>{
    const { item } = req.body;
    let SQL = "INSERT INTO cadastro (itens) VALUES ('cadastrar usuário')";
    db.query(SQL, item, (err, result) => {
        console.log(err);
    })
}



);