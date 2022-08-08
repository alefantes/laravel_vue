import Vue from 'vue'
import VueRouter from "vue-router";
import PostComponent from "./components/PostComponent";

////маршрут []-всегда для массива {}всегда для объекта
Vue.use(VueRouter) //использование роутера в своем вью

export default new VueRouter({  //export default то что будет импортировано куда-то

    mode:   'history', //сохраняется история как при переходе по ссылкам обычного браузера
    routes: [
        {
            path: '/post',
            component: PostComponent
        }
    ]
})
