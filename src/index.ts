import express, { Request, Response } from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { bodyParserGraphQL } from 'body-parser-graphql';
import compression from 'compression';
import typeDefs from './graphql/schema/schema';
import resolvers from './graphql/resolvers/resolvers';
import morgan from 'morgan';
import helmet from 'helmet';
import 'dotenv/config';
import cors from 'cors';

const app = express();

if (process.env.NODE_ENV === 'production') {
	app.use(morgan('combined'));
	app.use(helmet());
} else {
	app.use(morgan('dev'));
}

app.use(cors());
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
	res.send('Hello World! 배포 성공 수정 완료?');
});

const port = 5000 || process.env.PORT;
app.listen(port, () => {
	console.log(`Running on ${port}`);
});
