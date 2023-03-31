import user from '../../models/user';

interface Argument {
	userId: string;
	userName: string;
}
const resolvers = {
	Query: {
		users: async () => {
			const result = await user.selectAll();
			return result ? result : false;
		},
	},

	Mutation: {
		addUser: async (_: any, { userId, userName }: Argument) => {
			const result = await user.insert(userId, userName);
			return result ? true : false;
		},
	},
};

export default resolvers;
