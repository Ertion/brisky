/*
 * @description: 
 * @version: 1.0
 * @autor: brisky
 * @email: 378591110@qq.com
 * @Date: 2021-08-13 20:19:35
 * @lastEditors: brisky
 * @LastEditTime: 2021-08-15 17:06:06
 */
window.$frame = {
  debug: true,
  isLayout: true,
  alias: {
    'layout-spa': '/views/layout-spa/index.js',
    'vessel-blank': '/views/vessel-blank/index.js',
    'exception-501': '/views/exception-501/index.js',
    'exception-404': '/views/exception-404/index.js',
    'module-login': '/views/login/index.js',
    'empty-page': '/views/empty-page/index.js',
  },
  login: {
    path: '/login',
    component: 'module-login'
  },
  routes: [{
    path: '/',
    component: 'exception-501',
    authorized: true
  },{
    path: '/empty-page',
    component: 'empty-page',
    authorized: true
  }]
}