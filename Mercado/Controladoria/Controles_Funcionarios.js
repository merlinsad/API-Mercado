import Funcionario from "../Modelos/Dados_Funcionarios.js";

export const getFuncionario = async(req, res) => {
    try{
        const Funcionarios = await Funcionario.findAll()
        res.send(Funcionarios)
    } catch(erro){
        console.log(erro)
    }
}

export const getFuncionarioById = async(req, res) => {
    try{
        const Funcionarios = await Funcionario.findAll({
            where:{
                id_funcionario: req.params.id
            }
        })
        res.send(Funcionarios)
    } catch(erro){
        console.log(erro)
    }
}

export const createFuncionario = async(req, res) => {
    try{
        await Funcionario.create()
        res.json({
            "messangem": "Um novo Funcionário foi inserido no Sistema."
        })
    } catch(erro){
        console.log(erro)
    }
}

export const updateFuncionario = async(req, res) => {
    try{
        await Funcionario.update({
            where:{
                id_funcionario: req.params.id
            }
        })
        res.json({
            "messangem": "O Funcionário " + req.params.id + " foi Atualizado."
        })
    } catch(erro){
        console.log(erro)
    }
}

export const deleteFuncionario = async(req, res) => {
    try{
        await Funcionario.destroy({
            where:{
                id_funcionario: req.params.id
            }
        })
        res.json({
            "messangem": "O Funcionário " + req.params.id + " foi Deletado."
        })
    } catch(erro){
        console.log(erro)
    }
}