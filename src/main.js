import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import $ from 'jquery'
import 'element-ui/lib/theme-chalk/index.css';

//import '../src/assets/style/purple/theme/index.css';// 紫色主题,太丑了——取消该行注释，注释上一行即可

import 'babel-polyfill';

import api from './api/index.js';

//全局可见的用户信息
let globalData = {
    userInfo: {
        nickname: ''
    }
};
//用户状态
let sta = {
    isLogin: false,
    adminName: ''
};

//全局变量区域

//全局可见的 对象 api——包含所有与后端交互的方法
Vue.prototype.$api = api;

Vue.prototype.$sta = sta;

Vue.prototype.$globalData = globalData;

Vue.config.productionTip = false;

//引入ElementUI组件库
Vue.use(ElementUI, {
    size: 'medium'
});

//未登录跳转到登录页面
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    // console.log(to.path,'userInfo:',Vue.prototype.$globalData.userInfo);
    const nickname = Vue.prototype.$globalData.userInfo.nickname;
    if (!nickname
        && (to.path === '/me'
            || to.path === '/message'
            || to.path === '/release'
            || to.path === '/order')) {
        api.getUserInfo().then(res => {
            console.log('getUserInfo:', res);
            if (res.status_code !== 1) {
                next('/login');
            } else {
                res.data.signInTime = res.data.signInTime.substring(0, 10);
                Vue.prototype.$globalData.userInfo = res.data;
                next();
            }
        }).catch(e => {
            next('/login');
        });

    } else {
        next();
    }
});
//创建时，加载App.vue组件，App.vue又通过路由的方式进入index.vue
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
