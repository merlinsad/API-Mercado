import express from "express";
import cors from "cors";
import Router from "./Rotas/rotas.js";
import db from "./Banco de dados/conexao.js";

const server = express()
server.use(express.json())
server.use(cors())

try {
    await db.authenticate()
    console.log("Conexão foi estabelecida!")
} catch(erro){
    console.log(erro)
}

server.use(Router)
server.listen(6000, ()=> console.log("Server executando na http://localhost/5000"))