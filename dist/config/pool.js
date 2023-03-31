"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
const pool = {
    query: async (query, value) => {
        let result = [];
        const pool = await db_1.default;
        let connection;
        try {
            connection = await pool.getConnection();
            console.log('db is connected');
            result = value ? await connection.query(query, value) : (await connection.query(query)) || null;
        }
        catch (err) {
            console.log(err);
            console.log('db is not connected');
            connection.rollback(() => { });
        }
        finally {
            connection.release();
            return result;
        }
    },
};
exports.default = pool;
//# sourceMappingURL=pool.js.map