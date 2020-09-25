"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prod = exports.dev = void 0;
var dev_1 = require("./dev");
Object.defineProperty(exports, "dev", { enumerable: true, get: function () { return __importDefault(dev_1).default; } });
var prod_1 = require("./prod");
Object.defineProperty(exports, "prod", { enumerable: true, get: function () { return __importDefault(prod_1).default; } });
