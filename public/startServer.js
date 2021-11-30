"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
function startServer(typeDefs, resolvers) {
    mongoose_1.default.connect(process.env.MONGODB_URI), { useNewUrlParser: true };
    mongoose_1.default.connection.once('open', () => {
        console.log('MongoDB Connected');
    });
    mongoose_1.default.connection.on('error', (err) => {
        console.log('MongoDB connection error: ', err);
    });
    const server = new apollo_server_1.ApolloServer({
        typeDefs,
        resolvers,
    });
    server
        .listen({ port: process.env.PORT || 4000 })
        .then(({ url }) => console.log(`🔥 Server started! at ${url}`));
}
exports.default = startServer;
//# sourceMappingURL=startServer.js.map