<template>
  <div class="container">
    <h1 class="pb-3">Task</h1>
  <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Tasks</th>
      <th scope="col">Description</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="task in tasks" :key="task.id">
      <td>{{task.title}}</td>
      <td>{{task.description}}</td>
      <td> <BtnEdit :id="task._id" /> <BtnDelet :id="task._id" /></td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import BtnDelet from '../components/BtnDelet.vue'
import BtnEdit from '../components/BtnEdit.vue'
import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {
 components: {BtnDelet, BtnEdit},
//  data: () => {

//  },

methods: {
   ...mapActions(['ActionGetTask']),
},

created(){
  this.ActionGetTask()
  console.log(this.tasks);
},
mounted(){

},
computed: {
  ...mapState(['tasks'])
}

}
</script>
