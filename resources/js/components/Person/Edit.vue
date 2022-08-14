<template>
    <div>
        <div class="mb-3" v-if="person">
            <input type="text" v-model="person.name" placeholder="name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" v-model="person.age" placeholder="age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="person.job" placeholder="job" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" type="submit" @click.prevent="$store.dispatch('updatePerson',{id:person.id,name: person.name,age:person.age,job:person.job})" value="Update" class="btn btn-primary">
        </div>
    </div>
</template>

<script>

export default {
    name: "Edit",
    // data() { //МЕТОД ДАТА он возвращает объект
    //     return {
    //         name: null,
    //         age: null,
    //         job: null
    //     }
    // },
    mounted() {
        this.$store.dispatch('getPerson',this.$route.params.id)
    },
    methods: {
        // getPerson() {
        //     axios.get(`/api/people/${this.$route.params.id}`)
        //         .then(res => {
        //             this.name = res.data.data.name
        //             this.age = res.data.data.age
        //             this.job = res.data.data.job
        //             console.log(res.data.data);
        //         })
        // },
        // updatePerson(){
        //     axios.patch(`/api/people/${this.$route.params.id}`,{name: this.name,age:this.age,job:this.job})
        //         .then(
        //             this.$router.push({name:'person.show',params:{id:this.$route.params.id} })
        //         )
        // }
    },
    computed:{
        isDisabled(){return this.person.name && this.person.age && this.person.job},
        person(){return this.$store.getters.person}
    }
}
</script>

<style scoped>

</style>
