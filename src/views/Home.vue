<template>
  <v-container>
    <timelines/>
  </v-container>
</template>

<script>
import timelines from '@/components/TimeLines.vue';

export default {
  name: 'home',
  components: {
    timelines,
  },
};
</script>
