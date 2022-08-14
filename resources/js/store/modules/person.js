const state = { //data Vue
    person: null,
    people: null
}

const getters = { //геттеры
    person: () => state.person,
    people: () => state.people
}

const actions = { //methods Vue
    getPerson({commit}, id) { //commit то переача сеттера мутации но не напрямую а через зарезервированный метод
        axios.get(`/api/people/${id}`)
            .then(res => {
                commit('setPerson', res.data.data)
        })
    },
    getPeople({commit}){
        axios.get('/api/people')
            .then(res=>{
                commit('setPeople', res.data.data)
            })
    },
    deletePerson({dispatch},id){
        axios.delete(`/api/people/${id}`)
            .then(res=>{
                console.log('deleteled');
                dispatch('getPeople')
            })
    }
}

const mutations = { //сеттеры
    setPerson(state, person) {
        state.person = person
    },
    setPeople(state, people) {
        state.people = people
    }
}


export default {
    state, mutations, getters, actions //экспортируем объект, который состоит из перечисленных объектов
}
