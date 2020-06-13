<template>
  <v-app-bar app color="primary" dark>
    <v-btn href="/" text>
      <v-icon>mdi-home</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppBar',
});
</script>
