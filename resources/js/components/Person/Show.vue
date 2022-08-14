<template>
    <div v-if="person">
        <div>
            Name: {{person.name}}
        </div>
        <div>
            Age: {{person.age}}
        </div>
        <div>
            Job: {{person.job}}
        </div>
        <router-link :to="{name:'person.edit',params:{id: person.id }}">Edit</router-link>
    </div>
</template>

<script>
export default {
    name: "Show",
    computed: {
        person(){
            return this.$store.getters.person
        }
    },
    mounted() {
        // this.getPerson()
        this.$store.dispatch('getPerson',this.$route.params.id)
    }
}
</script>

<style scoped>

</style>


//при использовании vuex не используем data и methods, а используем mounted и computed
