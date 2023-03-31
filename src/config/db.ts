import mysql from 'promise-mysql';
import 'dotenv/config';

const dbConfig: any = {
	host: process.env.DB_HOST,
	port: '3306',
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
};

export default mysql.createPool(dbConfig);
