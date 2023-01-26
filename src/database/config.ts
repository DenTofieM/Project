import { Sequelize } from "sequelize-typescript";
import { Products } from "../models/products";
import { Stocks } from "../models/stocks";

const connection = new Sequelize({
    dialect: "mysql",
    host: "127.0.0.1",
    username: 'root',
    password: 'root',
    database: 'products',
    logging: false,
    models:[Products, Stocks]
});

export default connection;