"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
var apollo_server_1 = require("apollo-server");
var mongoose_1 = __importDefault(require("mongoose"));
function startServer(typeDefs, resolvers) {
    mongoose_1.default.connect("mongodb+srv://recruiters:portfolio@cluster0.s3koe.mongodb.net/users?retryWrites=true&w=majority"),
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        };
    var server = new apollo_server_1.ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers,
    });
    server
        .listen()
        .then(function (_a) {
        var url = _a.url;
        return console.log("\uD83D\uDD25 Server started! at " + url);
    });
}
exports.startServer = startServer;
