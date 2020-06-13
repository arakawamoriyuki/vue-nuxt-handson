<template>
  <v-responsive
    class="overflow-y-auto"
    max-height="400"
  >
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </v-responsive>
</template>

<script>
import store from '@/store/HandCounterStore';

export default {
  name: 'hand-counter',
  components: {},
  computed: {
    count() {
      return store.state.count;
    },
  },
  methods: {
    increment() {
      store.commit('increment');
    },
    decrement() {
      store.commit('decrement');
    },
  },
};
</script>
