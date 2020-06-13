import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newTask: {
      title: '',
      description: '',
    },
    tasks: [
      {
        id: 1,
        title: 'かんそう',
        description: 'とうもろこしを乾燥させてマサにする',
        done: true,
      },
      {
        id: 2,
        title: 'まぜる',
        description: 'マサ、薄力粉、塩、オリーブオイル、熱湯をまぜる',
        done: true,
      },
      {
        id: 3,
        title: 'ねかす',
        description: '生地を一晩冷蔵庫で寝かせてなじませる',
        done: false,
      },
      {
        id: 4,
        title: 'やく',
        description: 'フライパンに油をひかずに中火で焦がさないように、表面に膨らみが出るように両目を焼きます',
        done: false,
      },
      {
        id: 5,
        title: 'たべる',
        description: 'アボカド、ニンニク、マヨネーズ、塩胡椒などで作ったディップソースで食べる',
        done: false,
      },
    ],
  },
  getters: {
    todoTasks(state) {
      return state.tasks.filter((task) => !task.done);
    },
    doneTasks(state) {
      return state.tasks.filter((task) => task.done);
    },
  },
  mutations: {
    addTask: (state, newTask) => {
      const taskIds = state.tasks.map((task) => task.id);
      const maxTaskId = Math.max(...taskIds);
      state.tasks.push({
        id: maxTaskId + 1,
        done: false,
        ...newTask,
      });
    },
    removeTask: (state, taskId) => {
      const index = state.tasks.findIndex((task) => task.id === taskId);
      state.tasks.splice(index, 1);
    },
    done: (state, taskId) => {
      const index = state.tasks.findIndex((task) => task.id === taskId);
      state.tasks[index].done = true;
    },
    retodo: (state, taskId) => {
      const index = state.tasks.findIndex((task) => task.id === taskId);
      state.tasks[index].done = false;
    },
  },
});
