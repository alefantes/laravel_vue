<template>
    <div class="container">
        <CreateComponent></CreateComponent>
<!--        <SinglePostComponent></SinglePostComponent>-->
        <IndexComponent></IndexComponent>
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
    },

    methods: { //инициализация методов в данном компоненте

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
