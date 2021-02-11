import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = new Router({
    mode: 'history',
    routes: [
        // Внешняя часть сайта
        {
            path: '/',
            // Оборачиваю в компонент обертку, чтобы всегда можно было сменить быстро стиль, заменив шаблон-обертку
            component: () => import('@/layout/LayoutFront/LayoutFront'),
            children: [
                {
                    path: '',
                    name: 'Main',
                    components: {
                        default: () => import('@/views/ViewMain'),
                        sidebar: () => import('@/views/ViewSidebar'),
                    },
                    meta: {
                        layout: 'LayoutFrontContentMain',
                    }
                },
                {
                    path: '/table1',
                    name: 'Table1',
                    component: () => import('@/views/ViewTable1'),
                    meta: {
                        layout: 'LayoutFrontContentDefault',
                    },
                },
                {
                    path: '/table2',
                    name: 'Table2',
                    component: () => import('@/views/ViewTable2'),
                    meta: {
                        layout: 'LayoutFrontContentDefault',
                    },
                },
                {
                    path: '*',
                    name: 'notFound',
                    component: () => import('@/views/View404'),
                    meta: {
                        requiresAuth: false,
                    }
                },
            ]
        },
    ]
})

export default routes;