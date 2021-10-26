import { Sequelize } from "sequelize";
import db from "../Banco de dados/Conexao.js";

const { DataTypes } = Sequelize
const Assinantes = db.define("assinantes", {
    id_assinante: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nome_assinante: {
        type: Sequelize.STRING(200),
    },
    email_assinante: {
        type: Sequelize.STRING(200),
    },
    telefone_assinante: {
        type: Sequelize.INTEGER,
    },
    rank_assinante: {
        type: Sequelize.STRING(200),
    },
},{
    timestamps: false,
    freezeTableName: true
})

export default Assinantes


