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
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <tr>
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td><a href="#" @click.prevent="changeEditPersonId(person.id,person.name,person.age,person.job)"
                           class="btn btn-success">Edit</a></td>
                </tr>
                <tr :class="isEdit(person.id) ? '' : 'd-none'">
                    <th scope="row">{{ person.id }}</th>
                    <td><input type="text" v-model="name" class="form-control"></td>
                    <td><input type="number" v-model="age" class="form-control"></td>
                    <td><input type="text" v-model="job" class="form-control"></td>
                    <td><a href="#" @click.prevent="changeEditPersonId(null)" class="btn btn-warning">Update</a></td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name: "IndexComponent",

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
        this.getPeople()
    },

    methods: {
        getPeople() {
            axios.get('/api/people')
                .then(res => {
                    console.log(res);
                    this.people = res.data
                })
        },
        updatePerson(){
            axios.post('/api/people/{id}',{name:this.name,age:this.age,job:this.job})
        },
        changeEditPersonId(id,name,age,job) {
            this.editPersonId = id,
            this.name = name,
            this.age = age,
            this.job = job
        },
        isEdit(id) {
            return this.editPersonId === id
        }
    },

}
</script>

<style scoped>

</style>
