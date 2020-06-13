import { shallowMount } from '@vue/test-utils';
import CheckList from '@/components/CheckList.vue';

describe('CheckList', () => {
  it('CheckListが表示される', () => {
    const wrapper = shallowMount(CheckList);
    expect(wrapper).toMatchSnapshot();
  });
});
