export default [
    {
        path: '/',
        view: ()=>import('./hello-world/index'),
        title: '首页'
    },
    {
        path: '/background',
        view: ()=>import('./css-secrets/page-one/view'),
        title: '背景和边框'
    },
    {
        path: '/shape',
        view: ()=>import('./css-secrets/page-two/view'),
        title: '形状'
    },
    {
        path: '/overflow',
        view: ()=>import('./overflow/view'),
        title: 'overflow'
    },
    {
        path: '/grid',
        view: ()=>import('./grid/view'),
        title: 'grid'
    },

]
