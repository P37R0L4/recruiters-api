"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const startServer_1 = __importDefault(require("./startServer"));
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const typeDefs_1 = __importDefault(require("./graphql/typeDefs"));
(0, startServer_1.default)(typeDefs_1.default, resolvers_1.default);
//# sourceMappingURL=index.js.map