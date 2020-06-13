<template>
  <v-responsive
    class="overflow-y-auto"
    max-height="400"
  >
    <div class="pa-6 text-center">
      This is a counter page
    </div>
    <hand-counter/>
  </v-responsive>
</template>

<script>
import HandCounter from '@/components/HandCounter.vue';

export default {
  name: 'counter',
  components: {
    HandCounter,
  },
};
</script>
