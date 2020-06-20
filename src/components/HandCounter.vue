<template>
  <v-card
    class="mx-auto"
    max-width="200"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-center text-h1">{{ count }}</div>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-btn icon @click="decrement">
        <v-icon x-large>mdi-minus</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="increment">
        <v-icon x-large>mdi-plus</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import store from '@/store/HandCounterStore';

export default {
  name: 'hand-counter',
  store,
  components: {},
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.dispatch('increment');
    },
    decrement() {
      this.$store.dispatch('decrement');
    },
  },
};
</script>
