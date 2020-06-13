<template>
  <div>
    <v-card max-width="800" class="mx-auto" outlined>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Create Todo</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field label="title" v-model="newTask.title" />
          <v-text-field label="description" v-model="newTask.description" />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="addTask(newTask)">Create</v-btn>
      </v-card-actions>
    </v-card>
    <v-card max-width="800" class="mx-auto" outlined>
      <v-list subheader two-line flat>
        <v-subheader>Todo</v-subheader>
        <v-list-item-group multiple>
          <v-list-item v-for="task in todoTasks" :key="task.id">
            <v-list-item-action>
              <v-checkbox
                v-model="task.done"
                color="primary"
                @click="done(task.id)"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{task.id}}. {{task.title}}</v-list-item-title>
              <v-list-item-subtitle>{{task.description}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon color="red" @click="removeTask(task.id)">mdi-delete</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>
      <v-list subheader two-line flat>
        <v-subheader>Done</v-subheader>
        <v-list-item-group multiple>
          <v-list-item v-for="task in doneTasks" :key="task.id">
            <v-list-item-action>
              <v-checkbox
                v-model="task.done"
                color="primary"
                @click="retodo(task.id)"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{task.id}}. {{task.title}}</v-list-item-title>
              <v-list-item-subtitle>{{task.description}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon color="red" @click="removeTask(task.id)">mdi-delete</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import store from '@/store/TodoListStore';

export default {
  name: 'todo-list',
  store,
  computed: {
    newTask() {
      return this.$store.state.newTask;
    },
    todoTasks() {
      return this.$store.getters.todoTasks;
    },
    doneTasks() {
      return this.$store.getters.doneTasks;
    },
  },
  methods: {
    addTask(task) {
      this.$store.commit('addTask', task);
    },
    removeTask(taskId) {
      this.$store.commit('removeTask', taskId);
    },
    done(taskId) {
      this.$store.commit('done', taskId);
    },
    retodo(taskId) {
      this.$store.commit('retodo', taskId);
    },
  },
};
</script>
