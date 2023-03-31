"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const dbConfig = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'dkswoah589318!!',
    database: 'study',
};
exports.default = promise_mysql_1.default.createPool(dbConfig);
//# sourceMappingURL=db.js.map