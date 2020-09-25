"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTypeScript = exports.getTSConfig = void 0;
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
var tsconfig = {
    target: 'es5',
    module: 'commonjs',
    moduleResolution: 'node',
    importHelpers: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    allowJs: false,
    strict: true,
    sourceMap: false,
    declaration: false,
    resolveJsonModule: true,
    lib: ['esnext'],
    baseUrl: './',
    paths: {
        '@/*': ['src/*'],
    },
};
function getTSConfig() {
    var exit = fs_extra_1.default.pathExistsSync(path_1.default.resolve() + '/tsconfig.json');
    if (exit) {
        var tsconfigJson = fs_extra_1.default.readJSONSync(path_1.default.resolve() + '/tsconfig.json');
        tsconfig = tslib_1.__assign(tslib_1.__assign({}, tsconfig), tsconfigJson.compilerOptions);
        if (!useTypeScript()) {
            tsconfig.allowJs = true;
        }
    }
    return tslib_1.__assign(tslib_1.__assign({}, tsconfig), { module: process.env.target || tsconfig.module || 'commonjs' });
}
exports.getTSConfig = getTSConfig;
function useTypeScript() {
    var packageJson = fs_extra_1.default.readJSONSync(path_1.default.resolve() + '/package.json');
    return packageJson.devDependencies['typescript'] !== null;
}
exports.useTypeScript = useTypeScript;
