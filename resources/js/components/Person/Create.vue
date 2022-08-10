<template>
    <div class="w-25" v-if="person">
        <div class="mb-3">
            <input type="text" v-model="name" placeholder="name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" v-model="age" placeholder="age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="job" placeholder="job" class="form-control">
        </div>
        <div class="mb-3">
            <input type="submit" @click.prevent="store" value="Add" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
import router from "../../router";
export default {
    name: "Create",
    data() { //МЕТОД ДАТА он возвращает объект
        return {
            name: null,
            age: null,
            job: null
        }
    },
    methods: {
        store(){
            axios.post('/api/people',{name:this.name,age:this.age,job:this.job})
                .then (res =>{
                    //можно стереть данные. а можно сделать редирект
                    console.log('User: '+this.name+' added')
                    this.name = null
                    this.age = null
                    this.job = null

                    router.push('person.index') //редирект на другую ссылку

                })
        }
    }
}
</script>

<style scoped>

</style>
