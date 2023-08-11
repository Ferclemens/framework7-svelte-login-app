
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
    //change state user (log in/ log out)
    setUserState({ state }, userName){
      state.users.map((userDb) => {
        if(userDb.name === userName){
          userDb.online = !userDb.online
        }
      })
      
    }
  },
})
export default store;
