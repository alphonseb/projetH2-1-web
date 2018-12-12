// Placeholder Store
import VueX from 'vuex'

const createStore = () => {
    return new VueX.Store({
        state: {
            counter: 0
        },
        mutations: {
            increment (state) {
                state.counter++
            }
        },
        actions: {
            increment (context) {
                context.commit('increment')
            }
        }
    })
}

export default createStore
