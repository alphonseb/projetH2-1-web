import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        me: {},
        to: ''
    },
    mutations: {
        setMeDatas (_state, _datas) {
            _state.me = {
                ..._state.me,
                ..._datas
            }
        },
        setTo (_state, _id) {
            _state.to = _id
        }
    },
    actions: {
        setMeDatas (_ctx, _datas) {
            _ctx.commit('setMeDatas', _datas)
        },
        setTo (_ctx, _id) {
            _ctx.commit('setTo', _id)
        }
    }
})
