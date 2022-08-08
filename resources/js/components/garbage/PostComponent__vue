<template>
    <div class="container">
        <CreateComponent></CreateComponent>
<!--        <SinglePostComponent></SinglePostComponent>-->
        <IndexComponent ref="index"></IndexComponent>
    </div>
</template>

<script>
// import SinglePostComponent from "./SinglePostComponent";
import CreateComponent from "./CreateComponent";
import IndexComponent from "./IndexComponent";

export default {
    name: "PostsComponent",

    data() { //инициализация данных в данном компоненте
        return {
            persons: null
        }
    },

    computed: { //вычисляемые свойства работа со свойтвами которые еще не проинцилизированы
    },

    mounted() {
        this.$refs.index.indexLog()  //вызываем метод другого компонента через  <IndexComponent ref="index"></IndexComponent>
    },

    methods: { //инициализация методов в данном компоненте
        parentLog(){
            console.log('this is parentComponent');
        }
    },

    components: {
        // SinglePostComponent,
        CreateComponent,
        IndexComponent
    }
}
</script>

<style scoped>

</style>
