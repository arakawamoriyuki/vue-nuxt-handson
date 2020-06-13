import { shallowMount } from '@vue/test-utils';
import TodoForm from '@/components/TodoForm.vue';

describe('TodoForm', () => {
  it('TodoFormが表示される', () => {
    const wrapper = shallowMount(TodoForm);
    expect(wrapper).toMatchSnapshot();
  });
});
