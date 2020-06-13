<template>
  <v-main>
    <timelines/>
  </v-main>
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
