"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recruiters_1 = __importDefault(require("../../../models/recruiters"));
exports.default = {
    Query: {
        recruiters: async () => await recruiters_1.default.find(),
        recruiter: async (_, { id }) => await recruiters_1.default.findById(id),
    },
    Mutation: {
        createRecruiter: async (_, { values }) => await recruiters_1.default.create(values),
        updateRecruiter: async (_, { values, id }) => await recruiters_1.default.findOneAndUpdate(id, values, { new: true }),
        deleteRecruiter: async (_, { id }) => !!(await recruiters_1.default.findOneAndDelete(id)),
    },
};
//# sourceMappingURL=resolvers.js.map