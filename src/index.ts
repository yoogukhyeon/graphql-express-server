import express, { Request, Response } from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { bodyParserGraphQL } from 'body-parser-graphql';
import compression from 'compression';
import typeDefs from './graphql/schema/schema';
import resolvers from './graphql/resolvers/resolvers';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParserGraphQL());
app.use(compression());

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true, // 스키마 검사 활성화 default: true
});

const serverStart = async () => {
	await server.start();
	server.applyMiddleware({
		app,
		path: '/graphql',
	});
};
serverStart();

// ApolloServer 미들웨어 셋팅

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World! 배포 성공');
});

const port = 5000 || process.env.PORT;
app.listen(port, () => {
	console.log(`Running on ${port}`);
});
