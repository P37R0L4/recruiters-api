"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var startServer_1 = require("./startServer");
var resolvers_1 = __importDefault(require("./graphql/resolvers"));
var typeDefs_1 = __importDefault(require("./graphql/typeDefs"));
(0, startServer_1.startServer)(typeDefs_1.default, resolvers_1.default);
