/*
 * @description: 
 * @version: 1.0
 * @autor: brisky
 * @email: 592576605@qq.com
 * @Date: 2021-08-13 20:19:35
 * @lastEditors: brisky
 * @LastEditTime: 2021-08-15 17:05:32
 */
module.exports = {
  // 页面入口，不能删除
  pageEntry: {
    '$pages/js/index.js': './src/main.ts',
  },
  layout: {
    'views/layout-spa/index.js': './src/components/layout-spa/index.tsx',
  },
  vessel: {
    'views/vessel-blank/index.js': './src/components/vessel-blank/index.tsx',
  },
  exception: {
    'views/exception-501/index.js': './src/components/exception-501/index.tsx',
    'views/exception-404/index.js': './src/components/exception-404/index.tsx',
    'views/empty-page/index.js': './src/components/empty-page',
  },
  login: {
    'views/login/index.js': './src/components/login/index.tsx',

  }
}