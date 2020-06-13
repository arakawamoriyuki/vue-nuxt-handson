<template>
  <v-app-bar app color="primary" dark>
    <v-btn href="/" text>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn href="/counter" text>
      <v-icon>mdi-counter</v-icon>
    </v-btn>
    <v-btn href="/todo" text>
      <v-icon>mdi-clipboard-check-multiple-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app-bar',
});
</script>
