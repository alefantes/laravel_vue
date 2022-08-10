<template>
    <div>
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
            <input type="submit" @click.prevent="updatePerson" value="Update" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
import router from "../../router";
export default {
    name: "Edit",
    data() { //МЕТОД ДАТА он возвращает объект
        return {
            name: null,
            age: null,
            job: null
        }
    },
    mounted() {
        this.getPerson()
    },
    methods: {
        getPerson() {
            axios.get('/api/people/' + this.$route.params.id)
                .then(res => {
                    this.name = res.data.name
                    this.age = res.data.age
                    this.job = res.data.job
                    console.log(res.data);
                })
        },
        updatePerson(){
            axios.patch('/api/people/' + this.$route.params.id,{name: this.name,age:this.age,job:this.job})
                .then(
                    router.push({name:'person.show',params:{id:this.$route.params.id} })
                )
        }
    }
}
</script>

<style scoped>

</style>
