<template>
    <div class="container">
        <CreateComponent></CreateComponent>
        <SinglePostComponent></SinglePostComponent>
        <!--    <table class="table">-->
        <!--        <thead>-->
        <!--        <tr>-->
        <!--            <th scope="col">#</th>-->
        <!--            <th scope="col">Name</th>-->
        <!--            <th scope="col">Age</th>-->
        <!--            <th scope="col">Job</th>-->
        <!--        </tr>-->
        <!--        </thead>-->
        <!--        <tbody>-->
        <!--        <tr v-for="person in persons">-->
        <!--            <th scope="row">{{person.id}}</th>-->
        <!--            <td>{{person.name}}</td>-->
        <!--            <td>{{person.age}}</td>-->
        <!--            <td>{{person.job}}</td>-->
        <!--        </tr>-->
        <!--        </tbody>-->
        <!--    </table>-->
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
import CreateComponent from "./CreateComponent";

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
        SinglePostComponent,
        CreateComponent
    }
}
</script>

<style scoped>

</style>
