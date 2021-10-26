import { Sequelize } from "sequelize";
import db from "../Banco de dados/Conexao.js";

const { DataTypes } = Sequelize
const Fornecedor = db.define("fornecedores", {
    id_fornecedor: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nome_fornecedor: {
        type: Sequelize.STRING(200)
    },
    telefone_fornecedor:{
        type: Sequelize.INTEGER,
    },
    produto_fornecdor:{
        type: Sequelize.STRING(200)
    },
}, {
    timestamps: false,
    freezeTableName: true
})

export default Fornecedor