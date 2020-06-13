import { shallowMount } from '@vue/test-utils';
import HandCounter from '@/components/HandCounter.vue';

describe('HandCounter', () => {
  it('HandCounterが表示される', () => {
    const wrapper = shallowMount(HandCounter);
    expect(wrapper).toMatchSnapshot();
  });
});
