<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" class="form-control" v-model="name" id="name" placeholder="name">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" v-model="age" id="age" placeholder="age">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" v-model="job" id="job" placeholder="job">
        </div>
        <div class="mb-3">
            <input type="submit" @click="addPerson" class="btn btn-primary" id="btn" value="отправить">
        </div>
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";

export default {
    name: "CreateComponent",

    data() {
        return {
            name: null,
            age: null,
            job: null
        }

    },

    methods: {
        addPerson() {
            console.log(this.name,this.age,this.job)
        }
    },

}
</script>

<style scoped>

</style>
