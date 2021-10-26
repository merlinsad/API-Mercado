import Fornecedor from "../Modelos/dados_fornecedores.js";

export const getFornecedor = async(req, res) => {
    try{
        const fornecedores = await Fornecedor.findAll()
        res.send(fornecedores)
    } catch(erro){
        console.log(erro)
    }
}

export const getFornecedorById = async(req, res) => {
    try{
        const fornecedores = await Fornecedor.findAll({
            where:{
                id_fornecedor: req.params.id
            }
        })
        res.send(fornecedores)
    } catch(erro){
        console.log(erro)
    }
}

export const createFornecedor = async(req, res) =>{
    try{
        await Fornecedor.create(req.body)
        res.json({
            "messangem": "Um novo Fornecedor foi inserido."
        })
    } catch(erro){
        console.log(erro)
    }
}

export const updateFornecedor = async(req, res) => {
    try{
        await Fornecedor.update(req.body, {
            where:{
                id_fornecedor: req.params.id
            }
        })
        res.json({
            "messangem": "O Fornecedor " + req.params.id + " foi atualizado."
        })
    } catch(erro){
        console.log(erro)
    }
}

export const deleteFornecedor = async(req, res) => {
    try{
        await Fornecedor.destroy({
            where:{
                id_fornecedor: req.params.id
            }
        })
        res.json({
            "messangem": "O Fornecedor " + req.params.id + " foi deletado do Sistema."
        })
    } catch(erro){
        console.log(erro)
    }
}