<template>
  <v-responsive class="overflow-y-auto">
    <div class="pa-6 text-center">
      This is a todo list page
    </div>
    <todo-list/>
  </v-responsive>
</template>

<script>
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'todo',
  components: {
    TodoList,
  },
};
</script>
