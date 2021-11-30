"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeTypes = void 0;
// import { fileLoader, mergeTypes } from "graphql-tools/merge";
const merge_1 = require("@graphql-tools/merge");
const load_files_1 = require("@graphql-tools/load-files");
const path_1 = __importDefault(require("path"));
const typesArray = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, "modules", "**", "*.gql"));
// const typeDefs = mergeTypes(typesArray);
const mergeTypes = (types, options) => {
    const schemaDefinition = options && typeof options.schemaDefinition === "boolean"
        ? options.schemaDefinition
        : true;
    return (0, merge_1.mergeTypeDefs)(types, {
        useSchemaDefinition: schemaDefinition,
        forceSchemaDefinition: schemaDefinition,
        throwOnConflict: true,
        commentDescriptions: true,
        reverseDirectives: true,
        ...options,
    });
};
exports.mergeTypes = mergeTypes;
exports.default = (0, exports.mergeTypes)(typesArray);
//# sourceMappingURL=typeDefs.js.map