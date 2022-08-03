<template>
<div class="container">
    111
    <SinglePostComponent></SinglePostComponent>
    <div class="name">Name: {{name}}</div>
    <div class="name">Job: {{vasyaJob}}</div>
    <button @click="sayHello">Hello</button>
    <button @click="sayHi">Hi</button>
</div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
export default {
    name: "PostsComponent",

    data(){ //инициализация данных в данном компоненте
      return{
          name: 'Вася',
          age: 20,
          is_maried:true,
      }
    },

    computed: { //вычисляемые свойства работа со свойтвами которые еще не проинцилизированы
        vasyaJob(){
            return this.name + ' работает в булочной'
        },
    },

    methods: { //инициализация методов в данном компоненте
        sayHello(){
           console.log('Hello')
        },
        sayHi(){
           console.log('Hi')
        },
    },

    components :{ //подключение компонентов
        SinglePostComponent
    }
}
</script>

<style scoped>

</style>
