import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
  },

  getters: {
  }, 

  mutations: {
    GetTask(state,data){
     state.tasks  = data;
    },
  },
  actions: {
    async ActionGetTask( context ){
       const res = await fetch('http://localhost:3000/api/tasks');
       const data = await res.json();
       context.commit('GetTask', data);
    },

    async ActionNewTask(context,addTask){
        await fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        body: JSON.stringify(addTask),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
        
      });
      window.location.href = "/"
    },

 
  },
  modules: {
  }
})
