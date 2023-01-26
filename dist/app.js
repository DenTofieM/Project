"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./database/config"));
const products_1 = __importDefault(require("./routes/products"));
//import mysql from 'mysql2';
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/product', products_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
config_1.default.sync()
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.log(err));
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
/*
let connection = mysql.createConnection({
    port: 3306,
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'todoapp'
});
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
});
*/ 
