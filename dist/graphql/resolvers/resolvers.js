"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../models/user"));
const resolvers = {
    Query: {
        users: async () => {
            const result = await user_1.default.selectAll();
            return result ? result : false;
        },
    },
    Mutation: {
        addUser: async (_, { userId, userName }) => {
            const result = await user_1.default.insert(userId, userName);
            return result ? true : false;
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map