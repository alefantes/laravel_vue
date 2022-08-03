import Vue from 'vue'
//import router from "./router";
import PostComponent from "./components/PostComponent";



require('./bootstrap');

const app = new Vue({
    el:'#app',
    components :{
        PostComponent,
    }
})
