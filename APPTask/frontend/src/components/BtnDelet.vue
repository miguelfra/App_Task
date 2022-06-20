<template>
  <button  @click="deletTask(id)" type="button" class="btn btn-danger">Delete</button>
</template>

<script>
export default {
props: {id: String},

methods: {
  async deletTask(id) {
    console.log(id);
    const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {method: 'DELETE'})
     window.location.href = "/"
    
  }

}

}
</script>

