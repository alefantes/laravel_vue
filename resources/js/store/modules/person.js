const state = { //data Vue
    person: null
}

const getters = { //геттеры
    person: state => {
        return state.person
    }
}

const actions = { //methods Vue
    getPerson({commit}, id) { //commit то переача сеттера мутации но не напрямую а через зарезервированный метод
        axios.get(`/api/people/${id}`)
            .then(res => {
                commit('setPerson', res.data.data)
        })
    }
}

const mutations = { //сеттеры
    setPerson(state, person) {
        state.person = person
    }
}


export default {
    state, mutations, getters, actions //экспортируем объект, который состоит из перечисленных объектов
}
