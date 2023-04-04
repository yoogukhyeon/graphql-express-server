"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
	type Boards {
		no: Int!
		title: String!
		content: String!
		views: String!
		likes: String!
		regDate: String!
	}

	type Query {
		boards: [Boards]
	}

	type Mutation {
		createBoard(title: String!, content: String!): Boolean
	}
`;
exports.default = typeDefs;
//# sourceMappingURL=schema.js.map