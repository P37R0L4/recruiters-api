"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    position: Number,
    started: Boolean,
    minigamePoints: Number,
    idRecruiter: String,
});
exports.default = mongoose_1.default.model("Game", Schema);
//# sourceMappingURL=game.js.map