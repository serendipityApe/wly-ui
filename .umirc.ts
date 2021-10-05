import { defineConfig } from 'dumi';

// 此处更换为自己的仓库名
let base = '/wly-ui';
let publicPath = '/wly-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  //指定wly-ui转换
  alias: {
    'wly-ui': '../../../',
  },
  title: 'wly UI',
  mode: 'site',
  outputPath: 'doc-site',
  exportStatic: {},
  dynamicImport: {},
  webpack5: {},
  mfsu: {},
  base,
  publicPath,
  //demo自动引入css
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'wly-ui',
        libraryDirectory: 'components/',
        style: true,
      },
    ],
  ],
});
