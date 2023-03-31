"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const body_parser_graphql_1 = require("body-parser-graphql");
const compression_1 = __importDefault(require("compression"));
const schema_1 = __importDefault(require("./graphql/schema/schema"));
const resolvers_1 = __importDefault(require("./graphql/resolvers/resolvers"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, body_parser_graphql_1.bodyParserGraphQL)());
app.use((0, compression_1.default)());
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
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
app.get('/', (req, res) => {
    res.send('Hello World! 배포 성공');
});
const port = 5000 || process.env.PORT;
app.listen(port, () => {
    console.log(`Running on ${port}`);
});
//# sourceMappingURL=index.js.map