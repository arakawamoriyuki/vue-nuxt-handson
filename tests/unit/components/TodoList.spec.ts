import { shallowMount } from '@vue/test-utils';
import TodoList from '@/components/TodoList.vue';

describe('TodoList', () => {
  it('TodoListが表示される', () => {
    const wrapper = shallowMount(TodoList);
    expect(wrapper).toMatchSnapshot();
  });
});
