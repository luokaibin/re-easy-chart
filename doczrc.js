export default {
  base: '/re-easy-chart/',
  src: './docsSrc',
  title: 're-easy-chart',
  // codeSandbox: false,
  typescript: true,
  menu: [
    '使用文档',
  ],
  dest: 'docs',
  public: './static',
  // modifyBundlerConfig: (bundlerConfig) => {
  //   const customizeRules = [{ test: /\.css$/, loader: 'style-loader!css-loader' }];
  //   bundlerConfig.module.rules.push(...customizeRules);
  //   return bundlerConfig;
  // },
  // modifyBabelRc: (babelrc) => {
  //   const newBabelRc = {
  //     ...babelrc,
  //     plugins: [
  //       ...babelrc.plugins,
  //       require.resolve('@babel/plugin-proposal-optional-chaining'),
  //       require.resolve('@babel/plugin-proposal-nullish-coalescing-operator')
  //     ]
  //   };
  //   return newBabelRc;
  // },
  // onCreateWebpackChain: (config) => {
  //   config.resolve.alias.set('@utils', 'src/utils');
  // },
  // indexHtml: './docHtml.html'
  /*themeConfig: {
    styles: {
      body: `
        font-size: 16px;
        line-height: 1.6;
      `
    }
  }*/
};
