export default [
    {
        path: '/',
        view: ()=>import('./hello-world/index'),
        title: '首页'
    },
    {
        path: '/css',
        view: ()=>import('./css-secrets/page-one/view'),
        title: '背景和边框'
    },

]
