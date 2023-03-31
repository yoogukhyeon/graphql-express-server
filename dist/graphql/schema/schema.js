"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
	type User {
		userId: String
		userName: String
	}

	type Query {
		users: [User]
	}

	type Mutation {
		addUser(userId: String!, userName: String!): Boolean
	}
`;
exports.default = typeDefs;
//# sourceMappingURL=schema.js.map