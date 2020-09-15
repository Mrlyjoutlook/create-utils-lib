"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getModuleName(module) {
    if (module === void 0) { module = ''; }
    module = module.toLocaleUpperCase();
    if (module.includes('ES')) {
        return 'es';
    }
    if (module.includes('COMMONJS')) {
        return 'cjs';
    }
    return module.toLocaleLowerCase();
}
exports.default = getModuleName;
