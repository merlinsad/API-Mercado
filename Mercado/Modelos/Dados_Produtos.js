import { Sequelize } from "sequelize";
import db from "../Banco de dados/Conexao.js";

const { DataTypes } = Sequelize
const Produtos = db.define("produto", {
    id_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nome_produto: {
        type: Sequelize.STRING(200)
    },
    preco_produto: {
        type: Sequelize.INTEGER,
    },
    setor_produto: {
        type: Sequelize.STRING(200)
    },
    estoque_produto:{
        type: Sequelize.INTEGER,
    },
},{
    timestamps: false,
    freezeTableName: true
})

export default Produtos