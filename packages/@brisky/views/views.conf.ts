/*
 * @description: 
 * @version: 1.0
 * @autor: brisky
 * @email: 592576605@qq.com
 * @Date: 2021-08-13 20:19:35
 * @lastEditors: brisky
 * @LastEditTime: 2021-08-15 14:41:01
 */
module.exports = {
  // 页面入口，不能删除
  pageEntry: {
    '$pages/js/index.js': './src/main.ts',
  },
  layout: {
    'resource/libs/@brisky/views/layout-spa/index.js': './src/components/layout-spa',
  },
  vessel: {
    'resource/libs/@brisky/views/vessel-blank/index.js': './src/components/vessel-blank',
  },
  exception: {
    'resource/libs/@brisky/views/exception-501/index.js': './src/components/exception-501',
    'resource/libs/@brisky/views/exception-404/index.js': './src/components/exception-404',
    'resource/libs/@brisky/views/empty-page/index.js': './src/components/empty-page'
  },
  login: {
    'resource/libs/@brisky/views/login/index.js': './src/components/login',
  }
}