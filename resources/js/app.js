import Vue from 'vue'
import store from "./store"; //импорт Vuex но импортируем всю папку сторе
import router from "./router";
import Index from "./components/Index";
//[]-всегда для массива {}всегда для объекта
require('./bootstrap');

const app = new Vue({
     el:'#app',
    components :{
        Index
    },
    router, //подключаем просо роутер, так как он не компонент а JS файл
    store
}) //.$mount('#app')
