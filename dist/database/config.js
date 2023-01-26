"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const products_1 = require("../models/products");
const stocks_1 = require("../models/stocks");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "127.0.0.1",
    username: 'root',
    password: 'root',
    database: 'products',
    logging: false,
    models: [products_1.Products, stocks_1.Stocks]
});
exports.default = connection;
