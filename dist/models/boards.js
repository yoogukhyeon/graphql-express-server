"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pool_1 = __importDefault(require("../config/pool"));
const tableName = 'boards';
const boards = {
    selectAll: async () => {
        const sql = `SELECT * FROM ${tableName}`;
        const result = await pool_1.default.query(sql, []);
        return result;
    },
    insert: async (writer, title, content) => {
        const sql = `INSERT INTO ${tableName} (writer, title, content) VALUES (?, ?, ?)`;
        const result = await pool_1.default.query(sql, [writer, title, content]);
        return true;
    },
};
exports.default = boards;
//# sourceMappingURL=boards.js.map