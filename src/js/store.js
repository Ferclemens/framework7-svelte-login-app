
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    users: [
      {
        name: 'admin',
        password: 'admin'
      },
      {
        name: 'user',
        password: 'user'
      },
    ]
  },
  getters: {
    users({ state }) {
      return state.users;
    }
  },
  actions: {
    addUser({ state }, users) {
      state.users = [...state.users, users];
    },
  },
})
export default store;
