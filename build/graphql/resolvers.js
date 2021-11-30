"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeResolversArray = void 0;
// import { fileLoader, mergeTypes } from "graphql-tools/merge";
var merge_1 = require("@graphql-tools/merge");
var load_files_1 = require("@graphql-tools/load-files");
var path_1 = __importDefault(require("path"));
var typesArray = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, "modules", "**", "resolvers.ts"));
var mergeResolversArray = function (types, options) {
    return (0, merge_1.mergeResolvers)(types, __assign({}, options));
};
exports.mergeResolversArray = mergeResolversArray;
exports.default = (0, exports.mergeResolversArray)(typesArray);
