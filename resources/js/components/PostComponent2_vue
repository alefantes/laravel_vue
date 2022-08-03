<template>
<div class="container">
    <SinglePostComponent></SinglePostComponent>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="person in personsAgeMoreTwenty">
            <th scope="row">{{person.id}}</th>
            <td>{{person.name}}</td>
            <td>{{person.age}}</td>
            <td>{{person.job}}</td>
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
export default {
    name: "PostsComponent",

    data(){ //инициализация данных в данном компоненте
      return{
          persons: [
              {
                  id:1,
                  name: 'Vasya',
                  age: 20,
                  job: 'coach'
              },
              {
                  id:2,
                  name: 'Elena',
                  age: 17,
                  job: 'rest'
              },
              {
                  id:3,
                  name: 'Petr',
                  age: 34,
                  job: 'seller'
              },
              {
                  id:4,
                  name: 'Ksusha',
                  age: 25,
                  job: 'traveler'
              },
              {
                  id:5,
                  name: 'Olya',
                  age: 21,
                  job: 'teacher'
              },
          ]
      }
    },

    computed: { //вычисляемые свойства работа со свойтвами которые еще не проинцилизированы
        //<tr v-for="person in persons" v-if="person.age > 20">
        personsAgeMoreTwenty(){ //<tr v-for="person in personsAgeMoreTwenty">
            return this.persons.filter(function(person){
                return person.age > 20
            })
        },
        personsAgeLessTwenty(){ //<tr v-for="person in personsAgeMoreTwenty">
            return this.persons.filter(function(person){
                return person.age <= 20
            })
        }

    },

    methods: { //инициализация методов в данном компоненте
    },

    components :{
          SinglePostComponent,
    }
}
</script>

<style scoped>

</style>
