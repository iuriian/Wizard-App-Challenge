import CustomInputText from '../../src/components/CustomInputText.vue';

describe('Custom Input Text', () => {
    const dataComponent = CustomInputText.data();

    it('should be a string', () => {
        expect(typeof dataComponent.name).toEqual("string");
    });

    it('should be empty', () => {
        expect(dataComponent.name).toBe("");
    });
});