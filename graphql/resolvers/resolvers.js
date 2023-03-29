import user from '../../models/user.js';

const resolvers = {
	Query: {
		users: async () => {
			const result = await user.selectAll();
			return result ? result : false;
		},
	},

	Mutation: {
		addUser: async (_, { userId, userName }) => {
			const result = await user.insert(userId, userName);
			return result ? result : false;
		},
	},
};

export default resolvers;
