"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boards_1 = __importDefault(require("../../models/boards"));
const resolvers = {
    Query: {
        boards: async () => {
            const result = await boards_1.default.selectAll();
            return result ? result : false;
        },
    },
    Mutation: {
        createBoard: async (_, { writer, title, content }) => {
            const result = await boards_1.default.insert(writer, title, content);
            return result ? true : false;
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map