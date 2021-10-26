import  Sequelize  from "sequelize";

const db = new Sequelize("mercado", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

export default db