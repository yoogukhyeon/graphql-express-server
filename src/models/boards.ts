import pool from '../config/pool';

const tableName = 'boards';

const boards = {
	selectAll: async () => {
		const sql = `SELECT * FROM ${tableName}`;
		const result = await pool.query(sql, []);
		return result;
	},
	insert: async (writer: any, title: any, content: any) => {
		const sql = `INSERT INTO ${tableName} (writer, title, content) VALUES (?, ?, ?)`;
		const result = await pool.query(sql, [writer, title, content]);
		return true;
	},
};

export default boards;
