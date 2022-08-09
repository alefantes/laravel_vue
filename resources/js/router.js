import Vue from 'vue'
import VueRouter from "vue-router";


////маршрут []-всегда для массива {}всегда для объекта
Vue.use(VueRouter) //использование роутера в своем вью

export default new VueRouter({  //export default то что будет импортировано куда-то

    mode:   'history', //сохраняется история как при переходе по ссылкам обычного браузера
    routes: [
        {
            path: '/people', component: ()=>import('./components/Person/Index'), //динамический импорт
            name: 'person.index' //нейимнг как в роутах ларавел ->name()
        },
        {
            path: '/people/create', component: ()=>import('./components/Person/Create'), //динамический импорт
            name: 'person.create' //нейимнг как в роутах ларавел ->name()
        },
        {
            path: '/people/:id/edit', component: ()=>import('./components/Person/Edit'), //динамический импорт
            name: 'person.edit' //нейимнг как в роутах ларавел ->name()
        },
        {
            path: '/people/show', component: ()=>import('./components/Person/Show'), //динамический импорт
            name: 'person.show' //нейимнг как в роутах ларавел ->name()
        }
    ]
})
