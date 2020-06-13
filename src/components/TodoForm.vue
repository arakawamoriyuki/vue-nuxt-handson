<template>
  <div>
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Create Todo</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field label="title" v-model="title" />
        <v-text-field label="description" v-model="description" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="onSubmit({ title, description })">Create</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: 'todo-form',
  data: () => ({
    title: '',
    description: '',
  }),
  props: {
    onSubmit: Function,
  },
};
</script>
