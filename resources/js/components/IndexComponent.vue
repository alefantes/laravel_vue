<template>
    <div class="w-100">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <ShowComponent :person="person" :ref="`show_${person.id}`"></ShowComponent>
                <EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
            </template>
            </tbody>
        </table>

    </div>
</template>

<script>

import EditComponent from "./EditComponent";
import ShowComponent from "./ShowComponent";

export default {
    name: "IndexComponent",
    components: {
        ShowComponent,
        EditComponent
    },
    data() {
        return {
            people: null,
            editPersonId: null,
            name: '',
            age: null,
            job: ''
        }

    },

    mounted() {
        this.getPeople(),
            this.$parent.parentLog() //через $parent вызываем метод родителя
    },

    methods: {
        getPeople() {
            axios.get('/api/people')
                .then(res => {
                    console.log(res);
                    this.people = res.data
                })
        },
        updatePerson(id) {
            this.editPersonId = null,
                console.log(this.name, this.age, this.job)
            axios.patch(`/api/people/${id}`, {name: this.name, age: this.age, job: this.job})
                .then(res => {
                    this.getPeople()
                })
        },
        deletePerson(id) {
            axios.delete(`/api/people/${id}`)
                .then(res => {
                    this.getPeople()
                })
        },
        changeEditPersonId(id, name, age, job) {
            this.editPersonId = id
            let editName = `edit_${id}`
            let fullEditName = this.$refs[`edit_${id}`][0] // здесь после refs идет не точка, чтобы обратиться дальше а передается в [] //this.$ref.edit.name
            console.log(fullEditName)
            fullEditName.name = name,
            fullEditName.age = age,
            fullEditName.job = job
        },
        isEdit(id) {
            return this.editPersonId === id
        },

        indexLog() {
            console.log('this is indexComponent');
        }

    },

}
</script>

<style scoped>

</style>
