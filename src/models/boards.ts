import pool from '../config/pool';

const tableName = 'boards';

const boards = {
	selectAll: async () => {
		const sql = `SELECT * FROM ${tableName}`;
		const result = await pool.query(sql, []);
		return result;
	},
	insert: async (writer: any, title: any, content: any) => {
		const sql = `INSERT INTO ${tableName} (writer, title, content, reg_user, modi_user) VALUES (?, ?, ?, ?, ?)`;
		const result = await pool.query(sql, [writer, title, content, writer, writer]);
		return true;
	},
};

export default boards;
