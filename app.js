import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { bodyParserGraphQL } from 'body-parser-graphql';
import compression from 'compression';
import conn from './config/pool.js';
import typeDefs from './graphql/schema/schema.js';
import resolvers from './graphql/resolvers/resolvers.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParserGraphQL());
app.use(compression());

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true, // 스키마 검사 활성화 default: true
	playground: true, // playgorund 활성화 default: true
});

await server.start();
// ApolloServer 미들웨어 셋팅
server.applyMiddleware({
	app,
	path: '/graphql',
});

const port = 5000 || process.env.PORT;
app.listen(port, () => {
	console.log(`Running on ${port}`);
});
