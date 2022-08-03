<template>
<div class="container">
    111
    <SinglePostComponent></SinglePostComponent>
    <div class="name">Name: {{name}}</div>
    <button @click="sayHello">Hello</button>
    <button @click="sayHi">Hi</button>
</div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
export default {
    name: "PostsComponent",

    data(){
      return{
          name: 'vasia',
          age: 20,
          is_maried:true,
      }
    },

    methods: {
        sayHello(){
           console.log('Hello')
        },
        sayHi(){
           console.log('Hi')
        },
    },

    components :{
        SinglePostComponent
    }
}
</script>

<style scoped>

</style>
