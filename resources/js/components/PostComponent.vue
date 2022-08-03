<template>
<div class="container">
    111
    <SinglePostComponent></SinglePostComponent>
    <div class="name">Name: {{name}}</div>
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

    components :{
        SinglePostComponent
    }
}
</script>

<style scoped>

</style>
