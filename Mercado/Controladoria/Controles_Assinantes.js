import { Sequelize } from "sequelize"
import Assinantes from "../Modelos/Dados_Assinantes.js"

export const getAssinantes = async(req, res) => {
    try{
        const Assinante = await Assinantes.findAll()
        res.send(Assinante)
    } catch(erro){
        console.log(erro)
    }
}

export const getAssinantesById = async(req, res) => {
    try{
        const Assinante = await Assinantes.findAll({
            where: Sequelize.or ({
                id_assinante: req.params.id
            }, {
                nome_assinante: req.params.id
            },
        )})
        res.send(Assinante)
    } catch(erro){
        console.log(erro)
    }
}

export const criarAssinante = async(req, res) => {
    try{
        await Assinantes.create(req.body)
        res.json({
            "messangem": "Um novo Assinante foi inserido no Sistema."
        })
    } catch(erro){
        console.log(erro)
    }
}

export const atualizarAssinante = async(req, res) => {
    try{
        await Assinantes.update(req.body, {
            where:{
                id_assinante: req.params.id
            }
        })
        res.json({
            "messangem": "O Assinante " + req.params.id + " foi atualizado."
        })
    } catch(erro){
        console.log(erro)
    }
}


export const deletarAssinante = async(req, res) => {
    try{
        await Assinantes.destroy({
            where:{
                id_assinante: req.params.id
            }
        })
        res.json({
            "messangem": "O Assinante " + req.params.id + " foi deletado do Sistema."
        })
    } catch(erro){
        console.log(erro)
    }
}