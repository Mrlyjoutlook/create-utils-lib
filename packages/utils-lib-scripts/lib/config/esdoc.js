"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_1 = tslib_1.__importDefault(require("./base"));
exports.default = {
    source: base_1.default.esTemp,
    destination: base_1.default.esdoc,
    index: "./README.md",
    // "package": "./package.json",
    plugins: [
        {
            name: "esdoc-standard-plugin",
            option: {
                lint: {
                    enable: false,
                },
                brand: {
                    title: "csair 退改平台现代化模块工具函数库",
                    description: "csair 退改平台现代化模块工具函数库",
                    author: "mr.lyj@outlook.com",
                },
            },
        },
    ],
};
