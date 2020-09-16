"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
var os_1 = tslib_1.__importDefault(require("os"));
var cross_spawn_1 = tslib_1.__importDefault(require("cross-spawn"));
function create(name, useTs) {
    if (name === void 0) { name = 'helpers'; }
    if (useTs === void 0) { useTs = false; }
    var root = path_1.default.resolve(name);
    fs_extra_1.default.ensureDirSync(name);
    console.log("Creating a new utils library in " + root);
    var packageJson = {
        name: name,
        version: '0.0.1',
        scripts: {
            dev: 'utils-lib-scripts dev',
            build: 'utils-lib-scripts build',
            doc: 'utils-lib-scripts doc',
        },
    };
    fs_extra_1.default.writeFileSync(path_1.default.join(root, 'package.json'), JSON.stringify(packageJson, null, 2) + os_1.default.EOL);
    var templateSrc = path_1.default.resolve(__dirname, '../../temp-js');
    if (useTs) {
        templateSrc = path_1.default.resolve(__dirname, '../../temp-ts');
    }
    fs_extra_1.default.copySync(templateSrc, root);
    // cd root
    process.chdir(root);
    var args = ['add', '--exact', '@create-utils-lib/scripts'];
    if (useTs) {
        args.push('@types/node', 'typescript', 'tslib');
    }
    args.push('-D', 'cwd', root);
    var output = cross_spawn_1.default.sync('yarn', args, { stdio: 'inherit' });
    if (output.error) {
        console.error('安装依赖失败');
        return;
    }
    console.log('Dependencies has installed');
}
exports.default = create;
