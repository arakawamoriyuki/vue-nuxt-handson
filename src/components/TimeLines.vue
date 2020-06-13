<template>
  <v-timeline align-top>
    <v-timeline-item
      v-for="(timeLine, i) in timeLines"
      :key="i"
      :color="timeLine.color"
      :icon="timeLine.icon"
      fill-dot
    >
      <v-card
        :color="timeLine.color"
        dark
      >
        <v-card-title class="title">{{timeLine.title}}</v-card-title>
        <v-card-text class="white text--primary">
          <v-row>
            <v-col cols="12" md="12">{{timeLine.description}}</v-col>
          </v-row>
          <v-btn
            v-if="timeLine.link"
            :color="timeLine.color"
            :href="timeLine.link"
            class="mx-0"
            outlined
          >
            {{timeLine.linkText}}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import store from '@/store/TimeLinesStore';

export default {
  name: 'time-lines',
  components: {},
  computed: {
    timeLines() {
      return store.state.timeLines;
    },
  },
};
</script>
