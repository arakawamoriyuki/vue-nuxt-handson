<template>
  <v-list subheader two-line flat>
    <v-subheader>{{ title }}</v-subheader>
    <v-list-item-group multiple>
      <v-list-item v-for="item in items" :key="item.id">
        <v-list-item-action>
          <v-checkbox
            v-model="item.done"
            color="primary"
            @click="onCheck(item)"
          ></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{item.id}}. {{item.title}}</v-list-item-title>
          <v-list-item-subtitle>{{item.description}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon color="red" @click="onDelete(item)">mdi-delete</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: 'check-list',
  props: {
    title: String,
    items: Array,
    onCheck: Function,
    onDelete: Function,
  },
};
</script>
