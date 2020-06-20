<template>
  <v-app-bar app color="primary" dark>
    <router-link to="/">
      <v-btn text>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </router-link>
    <router-link to="/counter">
      <v-btn text>
        <v-icon>mdi-counter</v-icon>
      </v-btn>
    </router-link>
    <router-link to="/todo">
      <v-btn text>
        <v-icon>mdi-clipboard-check-multiple-outline</v-icon>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app-bar',
});
</script>
