"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pool_1 = __importDefault(require("../config/pool"));
const tableName = 'boards';
const boards = {
    selectAll: async () => {
        const sql = `SELECT * FROM ${tableName} order by no desc`;
        const result = await pool_1.default.query(sql, []);
        return result;
    },
    insert: async (writer, title, content) => {
        const sql = `INSERT INTO ${tableName} (writer, title, content, reg_user, modi_user) VALUES (?, ?, ?, ?, ?)`;
        const result = await pool_1.default.query(sql, [writer, title, content, writer, writer]);
        return true;
    },
};
exports.default = boards;
//# sourceMappingURL=boards.js.map