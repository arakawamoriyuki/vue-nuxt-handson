<template>
  <div>
    <v-card max-width="800" class="mx-auto" outlined>
      <todo-form :onSubmit="(newTask) => { addTask(newTask) }" />
    </v-card>
    <v-card max-width="800" class="mx-auto" outlined>
      <check-list
        title="Todo"
        :items="todoTasks"
        :onCheck="(task) => { done(task.id) }"
        :onDelete="(task) => { removeTask(task.id) }"
      />
      <v-divider></v-divider>
      <check-list
        title="Done"
        :items="doneTasks"
        :onCheck="(task) => { retodo(task.id) }"
        :onDelete="(task) => { removeTask(task.id) }"
      />
    </v-card>
  </div>
</template>

<script>
import store from '@/store/TodoListStore';
import CheckList from '@/components/CheckList.vue';
import TodoForm from '@/components/TodoForm.vue';

export default {
  name: 'todo-list',
  store,
  components: {
    TodoForm,
    CheckList,
  },
  computed: {
    todoTasks() {
      return this.$store.getters.todoTasks;
    },
    doneTasks() {
      return this.$store.getters.doneTasks;
    },
  },
  methods: {
    addTask(task) {
      this.$store.dispatch('addTask', task);
    },
    removeTask(taskId) {
      this.$store.dispatch('removeTask', taskId);
    },
    done(taskId) {
      this.$store.dispatch('done', taskId);
    },
    retodo(taskId) {
      this.$store.dispatch('retodo', taskId);
    },
  },
};
</script>
