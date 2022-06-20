<template>
  <Form action="Edit Task" :taskId="taskId"/>
</template>

<script>
import Form from '@/components/Form.vue'

export default {
 components: { Form },
 data: () => ({
  taskId: {}
 }),
  methods: {
     async GetEditTask(){
      const res = await fetch(`http://localhost:3000/api/tasks/${this.$route.params.id}`);
      const data = await res.json();
      this.taskId = data;
    }
  },

  mounted(){
    this.GetEditTask()
  }
}
</script>
