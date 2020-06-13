<template>
  <v-responsive class="overflow-y-auto">
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
