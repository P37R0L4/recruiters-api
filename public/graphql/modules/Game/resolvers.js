"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = __importDefault(require("../../../models/game"));
exports.default = {
    Query: {
        game: async (_, { idRecruiter }) => await game_1.default.findOne({ idRecruiter: idRecruiter }),
    },
    Mutation: {
        createGame: async (_, { data }) => await game_1.default.create(data),
        updateGame: async (_, { id, data }) => await game_1.default.findOneAndUpdate({ idRecruiter: id }, data, {
            new: true,
        }),
        deleteGame: async (_, { id }) => !!(await game_1.default.findOneAndDelete(id)),
    },
};
//# sourceMappingURL=resolvers.js.map