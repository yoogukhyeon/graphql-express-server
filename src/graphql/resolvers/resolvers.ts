import boards from '../../models/boards';

interface Argument {
	writer: string;
	title: string;
	content: string;
}
const resolvers = {
	Query: {
		boards: async () => {
			const result = await boards.selectAll();
			return result ? result : false;
		},
	},

	Mutation: {
		createBoard: async (_: any, { writer, title, content }: Argument) => {
			const result = await boards.insert(writer, title, content);
			return result ? true : false;
		},
	},
};

export default resolvers;
