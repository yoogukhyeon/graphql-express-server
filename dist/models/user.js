"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pool_1 = __importDefault(require("../config/pool"));
const tableName = 'user';
const user = {
    selectAll: async () => {
        const sql = `SELECT * FROM ${tableName}`;
        const result = await pool_1.default.query(sql, []);
        return result;
    },
    insert: async (userId, userName) => {
        const sql = `INSERT INTO ${tableName} (userId, userName) VALUES (?, ?)`;
        const result = await pool_1.default.query(sql, [userId, userName]);
        return true;
    },
};
exports.default = user;
//# sourceMappingURL=user.js.map