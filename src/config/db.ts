import mysql from 'promise-mysql';

const dbConfig: any = {
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: 'dkswoah589318!!',
	database: 'study',
};

export default mysql.createPool(dbConfig);
