"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    name: String,
    data: String,
    grade: Number,
    comment: String,
});
exports.default = mongoose_1.default.model('Recruiters', Schema);
//# sourceMappingURL=recruiters.js.map