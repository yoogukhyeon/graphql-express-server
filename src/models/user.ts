import pool from '../config/pool';

const tableName = 'user';

const user = {
	selectAll: async () => {
		const sql = `SELECT * FROM ${tableName}`;
		const result = await pool.query(sql, []);
		return result;
	},
	insert: async (userId: any, userName: any) => {
		const sql = `INSERT INTO ${tableName} (userId, userName) VALUES (?, ?)`;
		const result = await pool.query(sql, [userId, userName]);
		return true;
	},
};

export default user;
