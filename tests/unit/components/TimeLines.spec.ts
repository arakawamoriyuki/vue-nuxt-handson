import { shallowMount } from '@vue/test-utils';
import TimeLines from '@/components/TimeLines.vue';

describe('TimeLines', () => {
  it('TimeLinesが表示される', () => {
    const wrapper = shallowMount(TimeLines);
    expect(wrapper).toMatchSnapshot();
  });
});
