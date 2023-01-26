import express from 'express';
import connection from './database/config';
import productRoutes from './routes/products'
//import mysql from 'mysql2';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/product', productRoutes);
app.use((
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    res.status(500).json({ message: err.message});
});


connection.sync()
    .then(()=> console.log("Database connected successfully"))
    .catch( err => console.log(err));

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