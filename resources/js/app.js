import Vue from 'vue'
import router from "./router";
//[]-всегда для массива {}всегда для объекта
require('./bootstrap');

const app = new Vue({
    el:'#app',
    components :{

    },
    router //подключаем просо роутер, так как он не компонент а JS файл
})
