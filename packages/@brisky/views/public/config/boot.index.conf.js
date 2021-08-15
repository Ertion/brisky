/*
 * @description: 
 * @version: 1.0
 * @autor: brisky
 * @email: 378591110@qq.com
 * @Date: 2021-08-13 20:19:35
 * @lastEditors: brisky
 * @LastEditTime: 2021-08-15 15:24:57
 */
window.$frame = {
  debug: true,
  isLayout: true,
  alias: {
    'layout-spa': '/resource/libs/@brisky/views/layout-spa/index.js',
    'vessel-blank': '/resource/libs/@brisky/views/vessel-blank/index.js',
    'exception-501': '/resource/libs/@brisky/views/exception-501/index.js',
    'exception-404': '/resource/libs/@brisky/views/exception-404/index.js',
    'empty-page': '/resource/libs/@brisky/views/empty-page/index.js',
    'module-login': '/resource/libs/@brisky/views/login/index.js'
  },
  login: {
    path: '/login',
    component: 'module-login'
  },
  routes: [{
    path: '/',
    component: 'vessel-blank',
    authorized: true
  },{
    path: '/empty-page',
    component: 'empty-page',
    authorized: true
  }]
}