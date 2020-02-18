import { mount } from '@vue/test-utils';
import CustomInputText from '../../src/components/CustomInputText.vue';

describe('Custom Input Text', () => {
    const wrapper = mount(CustomInputText);

    console.log(wrapper.get());

    xit('should return a string', () => {
        expect(wrapper.name).toBe(String);
    });
});