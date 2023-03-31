import poolPromise from './db';
interface QueryResult {
	affectedRows: number;
	insertId: number;
	[key: string]: any;
}

interface QueryOptions {
	value?: Array<string | number>;
}
const pool = {
	query: async (query: string, value: Array<QueryOptions>) => {
		let result: Array<QueryResult> = [];
		const pool = await poolPromise;
		let connection: any;
		try {
			connection = await pool.getConnection();
			console.log('db is connected');
			result = value ? await connection.query(query, value) : (await connection.query(query)) || null;
		} catch (err) {
			console.log(err);
			connection.rollback(() => {});
		} finally {
			connection.release();
			return result;
		}
	},
};

export default pool;
