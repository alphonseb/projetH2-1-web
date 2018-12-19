import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        me: {}
    },
    mutations: {
        setMeDatas (_state, _datas) {
            _state.me = {
                ..._state.me,
                ..._datas
            }
        }
    },
    actions: {
        setMeDatas (_ctx, _datas) {
            _ctx.commit('setMeDatas', _datas)
        }
    }
})
