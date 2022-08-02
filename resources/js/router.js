import Vue from 'vue'
import VueRouter from "vue-router";
import PostComponent from "./components/PostComponent";

Vue.use(VueRouter)

export default new VueRouter({

    mode:   'history' //сохраняется история как при переходе по ссылкам обычного браузера
    routes: [ //маршрут
        {
            path:   '/posts',
            component:  PostComponent
        }
    ]
})
