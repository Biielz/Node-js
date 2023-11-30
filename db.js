import mysql from 'mysql2';

/* const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}); */

//o banco de dados que será usado no site.
const connection = mysql.createConnection({
    //o host.
    host: 'localhost',
    //o usuario que preencher os dados no banco de dados.
    user: 'root',
    //a senha do banco.
    password: 'Admin@123',
    //o nome do banco.
    database: 'lojadb'
});

//uma função que serve para verificar se a conexão ocorrer erro.
connection.connect((error) => {
    if(error) throw error;
    console.log(`Conectado ao banco de dados: lojadb } `);
});

export default connection;