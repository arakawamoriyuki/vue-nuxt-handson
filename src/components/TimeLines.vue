<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
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
</template>

<script>
export default {
  name: 'TimeLines',
  components: {},
  data: () => ({
    timelines: [
      {
        color: 'green lighten-1',
        title: '事前準備',
        description: 'ハンズオン前にnodeやyarn環境を整えましょう',
        icon: 'mdi-home',
        link: 'https://github.com/arakawamoriyuki/vue-nuxt-handson/readme.md',
        linkText: 'github readme',
      },
      {
        color: 'green lighten-1',
        title: 'Web基礎',
        description: '近代webの基礎的な学習とJavascript超入門しましょう',
        icon: 'mdi-book-open-variant',
        link: 'https://github.com/arakawamoriyuki/vue-nuxt-handson/readme.md',
        linkText: 'github readme',
      },
      {
        color: 'green lighten-1',
        title: 'Vue.jsについて',
        description: 'Vue.jsについて学びます',
        icon: 'mdi-book-open-variant',
        link: 'https://github.com/arakawamoriyuki/vue-nuxt-handson/readme.md',
        linkText: 'github readme',
      },
      {
        color: 'green lighten-1',
        title: '環境構築',
        description: '実際に開発環境を立ち上げ、ブラウザに表示します',
        icon: 'mdi-laptop',
        link: 'https://github.com/arakawamoriyuki/vue-nuxt-handson/tree/setup-handson',
        linkText: 'github setup-handson tag',
      },
      {
        color: 'blue lighten-1',
        title: 'カウンター',
        description: 'カウンターアプリを作成してみましょう',
        icon: 'mdi-laptop',
        link: 'https://github.com/arakawamoriyuki/vue-nuxt-handson/tree/counter',
        linkText: 'github counter tag',
      },
      {
        color: 'blue lighten-1',
        title: 'TODOリスト',
        description: 'TODOリストアプリを作成してみましょう',
        icon: 'mdi-laptop',
        link: 'https://github.com/arakawamoriyuki/vue-nuxt-handson/tree/todolist',
        linkText: 'github todolist tag',
      },
      {
        color: 'blue lighten-1',
        title: 'プロフィール',
        description: '自分のプロフィールサイトを作成してみましょう',
        icon: 'mdi-laptop',
        link: 'https://github.com/arakawamoriyuki/vue-nuxt-handson/tree/profile',
        linkText: 'github profile tag',
      },
      {
        color: 'blue lighten-1',
        title: '静的サイトホスティング',
        description: 'プロフィールサイトを全世界公開しよう',
        icon: 'mdi-laptop',
        link: 'https://github.com/arakawamoriyuki/vue-nuxt-handson/readme.md',
        linkText: 'github readme',
      },
      {
        color: 'blue lighten-1',
        title: 'nuxt (optional)',
        description: 'nuxtについて学びます',
        icon: 'mdi-laptop',
        link: 'https://github.com/arakawamoriyuki/vue-nuxt-handson/tree/nuxt',
        linkText: 'github nuxt tag',
      },
    ],
  }),
};
</script>
