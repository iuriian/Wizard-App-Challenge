import CustomInputColor from '../../src/components/CustomInputColor.vue';

describe("Custom input color", () => {
    const dataComponent = CustomInputColor.data();

    it("should be a string", () => {
        expect(typeof dataComponent.color).toEqual("string");
    });

    it("should not be null", () => {
        expect(dataComponent.color).not.toBeNull();
    });
})