import Produtos from "../Modelos/dados_produtos.js";

export const getProdutos = async(req, res) => {
    try{
        const Produto = await Produtos.findAll()
        res.send(Produto)
    } catch(erro){
        console.log(erro)
    }
}

export const getProdutosBy = async(req, res) => {
    try{
        const Produto = await Produtos.findAll({
            where: {
                id_produto: req.params.id
            }
        })
        res.send(Produto)
    } catch(erro){
        console.log(erro)
    }
}

export const inserirProduto = async(req, res) => {
    try{
        await Produtos.create(req.body)
        res.json({
            "messangem": "Um novo produto foi inserido no catálogo."
        })
    } catch(erro){
        console.log(erro)
    }
}

export const atualizarProduto = async(req, res) => {
    try{
        await Produtos.update(req.body, {
            where: {
                id_produto: req.params.id
            }
        })
        res.json({
            "messangem": "O produto " + req.params.id + " foi atualizado."
        })
    } catch(erro){
        console.log(erro)
    }
}

export const deletarProduto = async(req, res) => {
    try{
        await Produtos.destroy({
            where:{
                id_produto: req.params.id
            }
        })
        res.json({
            "messangem": "O produto " + req.params.id + " foi removido do sistema."
        })
    } catch(erro){
        console.log(erro)
    }
}