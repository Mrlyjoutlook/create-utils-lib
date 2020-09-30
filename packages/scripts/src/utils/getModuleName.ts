export default function getModuleName(module: string = '') {
  module = module.toLocaleUpperCase();
  if (module.includes('ES')) {
    return 'esm';
  }
  if (module.includes('COMMONJS')) {
    return 'cjs';
  }
  return module.toLocaleLowerCase();
}
