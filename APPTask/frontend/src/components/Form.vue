<template>
  <div class="card mx-auto" style="width: 50%" v-if="modo">
    <div class="card-body bg-dark text-white">
      <form @submit.prevent="newTask()">
        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input
            v-model="task.title"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Title Task"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Description</label>
          <input
           v-model="task.description"
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Description Task"
          />
          
        </div>
        <button type="submit" class="btn btn-success">{{action}}</button>
      </form>
    </div>
  </div>

  <div class="card edit mx-auto" style="width: 50%" v-else>
      <div class="card-body bg-dark text-white">
        <form @submit.prevent="EditTask()">
          <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input
              v-model="taskId.title"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              
              
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Description</label>
            <input
            v-model="taskId.description"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              
            />
            
          </div>
          <button type="submit" class="btn btn-success">{{action}}</button>
        </form>
      </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: {
    action: String,
    taskId: Object
  },
  data: () => ({
    task: {},
    modo: true,
  }),

  methods: {
    ...mapActions(['ActionNewTask']),

    newTask(){
      this.ActionNewTask(this.task);
    },
    async EditTask(){
         await fetch(`http://localhost:3000/api/tasks/${this.taskId._id}`, {
         method: 'PUT',
         body: JSON.stringify(this.taskId),
         headers: {
           'Accept': 'application/json',
           'Content-type': 'application/json'
         }
       });
       window.location.href = "/"
    },
    
    TypeForm(){
      if (this.action === 'Edit Task') {
        this.modo = false
      } else {
        this.modo = true
      }
    }
  },

  mounted(){
    this.TypeForm()
  }
}
</script>

<style scoped>
 input{
font-weight: bold;
}
label{
  text-transform: uppercase;
  font-weight: bold;

}
</style>

