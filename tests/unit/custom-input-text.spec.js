import { mount } from '@vue/test-utils';
import CustomInputText from '../../src/components/CustomInputText.vue';

describe('Custom Input Text', () => {
    const dataComponent = CustomInputText.data();
    const methodsComponent = CustomInputText.methods;

    it('should be a string', () => {
        expect(typeof dataComponent.name).toEqual("string");
    });

    it('should be empty', () => {
        expect(dataComponent.name).toBe("");
    });

    xit('should be called', () => {
        expect(methodsComponent.sendData()).toHaveBeenCalled();
    });
});