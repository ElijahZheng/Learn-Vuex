// status
const state = {
  count: 0,
  todos: [
    { id: 1, text: 'hello', done: true },
    { id: 2, text: 'world', done: false }
  ]
}

const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  }
}

// mutations
const mutations = {
  increment (state, payload) {
    state.count += payload.amount
  }
}

// actions
const actions = {
  actionIncrement ({commit}, payload) {
    commit('increment', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
