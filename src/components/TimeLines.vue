<template>
  <v-container>
    <v-timeline align-top>
      <v-timeline-item
        v-for="(timeline, i) in timelines"
        :key="i"
        :color="timeline.color"
        :icon="timeline.icon"
        fill-dot
      >
        <v-card
          :color="timeline.color"
          dark
        >
          <v-card-title class="title">{{timeline.title}}</v-card-title>
          <v-card-text class="white text--primary">
            <v-row>
              <v-col cols="12" md="12">{{timeline.description}}</v-col>
            </v-row>
            <v-btn
              v-if="timeline.link"
              :color="timeline.color"
              :href="timeline.link"
              class="mx-0"
              outlined
            >
              {{timeline.linkText}}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import store from '@/store/TimeLinesStore';

export default {
  name: 'time-lines',
  store,
  components: {},
  computed: {
    timeLines() {
      return this.$store.state.timeLines;
    },
  },
};
</script>
