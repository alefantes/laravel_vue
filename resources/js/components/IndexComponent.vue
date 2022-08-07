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
                <tr :class="isEdit(person.id) ? 'd-none' : ''">
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td><a href="#" @click.prevent="changeEditPersonId(person.id,person.name,person.age,person.job)" class="btn btn-success">Edit</a></td>
                    <td><a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Delete</a></td>
                </tr>
                <EditComponent :person="person" ref="edit"></EditComponent>
            </template>
            </tbody>
        </table>

    </div>
</template>

<script>

import EditComponent from "./EditComponent";
export default {
    name: "IndexComponent",
    components: {
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
        updatePerson(id){
            this.editPersonId = null,
                console.log(this.name, this.age, this.job)
            axios.patch(`/api/people/${id}`,{name:this.name,age:this.age,job:this.job})
                .then(res=>{
                    this.getPeople()
                })
        },
        deletePerson(id){
            axios.delete(`/api/people/${id}`)
                .then(res=>{
                    this.getPeople()
                })
        },
        changeEditPersonId(id,name,age,job) {
            this.editPersonId = id,
                console.log(this.$refs)
            this.$refs.edit.name = name,
            this.$refs.edit.age = age,
            this.$refs.edit.job = job
        },
        isEdit(id) {
            return this.editPersonId === id
        },

        indexLog(){
            console.log('this is indexComponent');
        }

    },

}
</script>

<style scoped>

</style>
