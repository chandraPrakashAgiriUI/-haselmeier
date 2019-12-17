import { shallowMount } from '@vue/test-utils';
import HolidayRow from '@/components/HolidayRow.vue';

describe('HolidayRow', () => {
  it('renders props.name and props.date when passed', () => {
    const name = 'holiday name';
    const date = '2018-05-10';
    const wrapper = shallowMount(HolidayRow, {
      propsData: { name, date },
    });
    console.log();
    expect(wrapper.text()).toBe(`${name}: ${date}`);
  });
});
