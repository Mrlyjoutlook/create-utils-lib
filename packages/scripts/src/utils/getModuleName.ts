export default function getModuleName(module: string = '') {
  module = module.toLocaleUpperCase();
  if (module.includes('ES')) {
    return 'es';
  }
  if (module.includes('COMMONJS')) {
    return 'cjs';
  }
  return module.toLocaleLowerCase();
}
