import express from "express"
import { getProdutos, getProdutosBy, inserirProduto, atualizarProduto, deletarProduto } from "../Controladoria/Controles_Produtos.js"
import { getAssinantes, getAssinantesById, criarAssinante, atualizarAssinante, deletarAssinante } from "../Controladoria/Controles_Assinantes.js"
import { createFornecedor, deleteFornecedor, getFornecedor, getFornecedorById, updateFornecedor } from "../Controladoria/Controles_Forncedores.js"
import { createFuncionario, deleteFuncionario, getFuncionario, getFuncionarioById, updateFuncionario } from "../Controladoria/Controles_Funcionarios.js"
const Router = express.Router()

//Administrar Rotas de Produtos
Router.get("/produtos", getProdutos)
Router.get("/produtos/:id", getProdutosBy)
Router.post("/produtos", inserirProduto)
Router.put("/produtos/:id", atualizarProduto)
Router.delete("/produtos/:id", deletarProduto)

//Administrar Rotas de Assinantes
Router.get("/assinantes", getAssinantes)
Router.get("/assinantes/:id", getAssinantesById)
Router.post("/assinantes", criarAssinante)
Router.put("/assinantes/:id", atualizarAssinante)
Router.delete("/assinantes/:id", deletarAssinante)

//Administrar Fornecedores
Router.get("/fornecedores", getFornecedor)
Router.get("/fornecedores/:id", getFornecedorById)
Router.post("/fornecedores", createFornecedor)
Router.put("/fornecedores/:id", updateFornecedor)
Router.delete("/fornecedores/:id", deleteFornecedor)

//Administrar Funcionarios
Router.get("/funcionarios", getFuncionario)
Router.get("/funcionarios/:id", getFuncionarioById)
Router.post("/funcionarios", createFuncionario)
Router.put("/funcionarios/:id", updateFuncionario)
Router.delete("/funcionarios/:id", deleteFuncionario)
export default Router