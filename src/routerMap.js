import Home from './pages/home';


/**
 * 
 * 管理员端页面 
 * path url地址
 * name url名字
 * component 加载的组件
 * auth 需要登陆拦截的页面*/

export const AdminPages = [
  { path: '', name: 'Home', component: Home, auth: true },
]