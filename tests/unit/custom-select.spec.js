import CustomSelect from "../../src/components/CustomSelect.vue";

describe("Custom select", () => {
    const datacomponent = CustomSelect.data();

    it("should be a string", () => {
        expect(typeof datacomponent.category).toEqual("string");
    });

    it("should be empty", () => {
        expect(datacomponent.category).toBe("");
    });

    it("should have a array", () => {
        expect(Array.isArray(datacomponent.categories)).toBeTruthy();
    });

    it("should be not empty", () => {
        expect(datacomponent.categories).not.toHaveLength(0);
    });
});