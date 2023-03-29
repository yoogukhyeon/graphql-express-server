import pool from '../config/pool.js';

const tableName = 'user';

const user = {
	selectAll: async () => {
		const sql = `SELECT * FROM ${tableName}`;
		const result = await pool.query(sql);
		return result;
	},
	insert: async (userId, userName) => {
		const sql = `INSERT INTO ${tableName} (userId, userName) VALUES (?, ?)`;
		const result = await pool.query(sql, [userId, userName]);
		return true;
	},
};

export default user;
