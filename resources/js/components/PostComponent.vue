<template>
<div class="container">
    <SinglePostComponent></SinglePostComponent>

</div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
export default {
    name: "PostsComponent",

    data(){ //инициализация данных в данном компоненте
      return{
          persons: [
          ]
      }
    },

    computed: { //вычисляемые свойства работа со свойтвами которые еще не проинцилизированы
    },

    mounted() {
        this.getPosts()
    },

    methods: { //инициализация методов в данном компоненте
        getPosts(){
            axios.get('/posts').then(function (data){
                console.log(data);
            })
        }
    },

    components :{
          SinglePostComponent,
    }
}
</script>

<style scoped>

</style>
