import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timelines: [
      {
        color: 'green lighten-1',
        title: '事前準備',
        description: 'ハンズオン前にnodeやyarn環境を整えましょう',
        icon: 'mdi-home',
        link: 'https://github.com/arakawamoriyuki/vue-nuxt-handson/blob/master/README.md',
        linkText: 'github',
      },
      {
        color: 'green lighten-1',
        title: 'Web基礎',
        description: '近代webの基礎的な学習とJavascript超入門しましょう',
        icon: 'mdi-book-open-variant',
        link: 'https://github.com/arakawamoriyuki/vue-nuxt-handson/blob/master/docs/web.md',
        linkText: 'github docs web',
      },
      {
        color: 'green lighten-1',
        title: 'Vue.jsについて',
        description: 'Vue.jsについて学びます',
        icon: 'mdi-book-open-variant',
        link: 'https://github.com/arakawamoriyuki/vue-nuxt-handson/blob/master/docs/vue.md',
        linkText: 'github docs vue',
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
        link: 'https://github.com/arakawamoriyuki/vue-nuxt-handson/blob/master/docs/hosting.md',
        linkText: 'github docs hosting',
      },
      {
        color: 'blue lighten-1',
        title: 'nuxt (optional)',
        description: 'nuxtについて学びます',
        icon: 'mdi-laptop',
        link: 'https://github.com/arakawamoriyuki/vue-nuxt-handson/blob/master/docs/nuxt.md',
        linkText: 'github docs nuxt',
      },
    ],
  },
});
