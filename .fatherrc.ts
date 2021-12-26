export default {
  target: 'browser',
  // 指定入口文件
  entry: 'src/index.tsx',
  // 指定输出文件
  file: 'dist/index.js',
  esm: 'babel',
  /**
   * 是否把 helper 方法提取到 @babel/runtime 里。
   * 推荐开启，能节约不少尺寸
   * 配置了 runtimeHelpers，一定要在 dependencies 里有 @babel/runtime 依赖
   * runtimeHelpers 只对 esm 有效，cjs 下无效，因为 cjs 已经不给浏览器用了，只在 ssr 时会用到，无需关心小的尺寸差异
   */
  runtimeHelpers: true,
  /**
   * 配置额外的 babel plugin
   * 比如配置 babel-plugin-import 按需加载 lodash
   */
  extraBabelPlugins: [
    ['babel-plugin-import', {
        libraryName: 'lodash',
        libraryDirectory: 'es',
        style: true,
    }]
  ],
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  }
};