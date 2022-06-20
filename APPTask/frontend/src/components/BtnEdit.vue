<template>
   <router-link :to="`/editTask/${id}`">
     <button type="button" class="btn btn-warning text-white">Edit</button>
   </router-link>
</template>

<script>
export default {
  props: {id: String},
  
}
</script>


