import { Sequelize } from "sequelize";
import db from "../Banco de dados/Conexao.js";

const { DataTypes } = Sequelize
const Funcionario = db.define("funcionarios", {
    id_funcionario: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nome_funcionario:{
        type: Sequelize.STRING(200),
    },
    cargo_funcionario:{
        type: Sequelize.STRING(200),
    },
    setor_funcionario:{
        type: Sequelize.STRING(200),
    },
    salario_funcionario:{
        type: Sequelize.INTEGER,
    },
},{
    timestamps: false,
    freezeTableName: true
})

export default Funcionario