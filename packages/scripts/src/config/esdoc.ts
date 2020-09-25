import base from './base';
import { useTypeScript } from './target';

export default {
  source: useTypeScript() ? base.esTemp : base.dist,
  destination: base.esdoc,
  index: './README.md',
  package: './package.json',
  plugins: [
    {
      name: 'esdoc-importpath-plugin',
      option: {
        replaces: [{ from: base.constant.estemp + '/', to: '' }],
      },
    },
    {
      name: 'esdoc-standard-plugin',
      option: {
        lint: {
          enable: false,
        },
        brand: {
          title: 'csair 退改平台现代化模块工具函数库',
          description: 'csair 退改平台现代化模块工具函数库',
          author: 'mr.lyj@outlook.com',
        },
      },
    },
    { name: 'esdoc-ecmascript-proposal-plugin', option: { all: true } },
  ],
};
