import router from '@/router'

export default {
    namespaced: true,
    state: {
        token: localStorage.getItem('token') || null,
    },
    getters: {
        token(state) {
            return state.token
        },
    },
    mutations: {
        SET_TOKEN(state, value) {
            localStorage.setItem('token', value);
            state.token = value
        },
    },
    actions: {
        login({commit}, data) {
            commit('SET_TOKEN', data.token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            router.push({name:'dashboard'})
        },
        logout({commit}) {
            commit('SET_TOKEN', null)
            router.push({name:"login"})
        }
    }
}
