import { gql } from 'apollo-server-express';

const typeDefs = gql`
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

export default typeDefs;
