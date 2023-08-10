
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    users: [
      {
        name: 'admin',
        password: 'admin',
        online: false
      },
      {
        name: 'user',
        password: 'user',
        online: false
      },
    ]
  },
  getters: {
    users({ state }) {
      return state.users;
    }
  },
  actions: {
    addUser({ state }, newUser) {
      state.users = [...state.users, newUser];
    },
    setUserState({ state }, userName){
      state.users.map((userDb) => {
        if(userDb.name === userName){
          userDb.online = true
        }
      })
      
    }
  },
})
export default store;
