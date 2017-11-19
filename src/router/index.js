import Vue from 'vue'
import Router from 'vue-router'

import Hello from '../components/Hello'
import Fenlei from '../components/Classify'
import Chongzhi from '../components/Chongzhi'
import Mine from '../components/Login'
import Tuijian from '../components/MainContent'
import Qita from '../components/MainQita'
import Details from '../components/Details'
import Car from '../components/shopCarComp'
import GoodSearch from '../components/GoodSearch'
import Search from '../components/Searchs'
Vue.use(Router)

export default new Router({
  routes: [
  {path: '/',redirect:"/hello"},
    {path: '*',redirect:"/hello"},
    {path: '/hello',name: 'Hello',component: Hello,
    		children:[
    		 {path: '/',redirect:"/tuijian"},
    			{path:"/tuijian",name:"tuijian",component:Tuijian},
    			{path:"/qita",name:"qita",component:Qita},
    		]
    },
    {path:'/fenlei',name:'fenlei',component: Fenlei},
    {path: '/chongzhi',name: 'chongzhi',component: Chongzhi},
    {path:'/car',name:'car',component: Car},
    {path:'/mine',name:'mine',component: Mine},
    {path: '/details/:shop/:num',name: 'details',component: Details},
    {path: '/search',name: 'search',component: GoodSearch},
    {path: '/searchs',name: 'searchs',component: Search}

    
  ]
})
//