"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeResolversArray = void 0;
// import { fileLoader, mergeTypes } from "graphql-tools/merge";
const merge_1 = require("@graphql-tools/merge");
const load_files_1 = require("@graphql-tools/load-files");
const path_1 = __importDefault(require("path"));
const typesArray = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, "modules", "**", "resolvers.ts"));
const mergeResolversArray = (types, options) => (0, merge_1.mergeResolvers)(types, {
    ...options,
});
exports.mergeResolversArray = mergeResolversArray;
exports.default = (0, exports.mergeResolversArray)(typesArray);
//# sourceMappingURL=resolvers.js.map