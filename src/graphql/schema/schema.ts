import { gql } from 'apollo-server-express';

const typeDefs = gql`
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
		createBoard(writer: String!, title: String!, content: String!): Boolean
	}
`;

export default typeDefs;
