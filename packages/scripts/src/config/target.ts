import path from 'path';
import fse from 'fs-extra';
import base from './base';

let tsconfig = {
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

export function getTSConfig() {
  const exit = fse.pathExistsSync(path.resolve() + '/tsconfig.json');

  if (exit) {
    const tsconfigJson = fse.readJSONSync(path.resolve() + '/tsconfig.json');
    tsconfig = {
      ...tsconfig,
      ...tsconfigJson.compilerOptions,
    };
  }

  return {
    ...tsconfig,
    module: process.env.target || tsconfig.module || 'commonjs',
  };
}

export function useTypeScript(): boolean {
  const packageJson = fse.readJSONSync(path.resolve(base.cwd, 'package.json'));
  return packageJson.devDependencies['typescript'] !== null;
}
