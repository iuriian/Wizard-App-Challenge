<template>
  <div class="input-group-select">
    <label for="category">CATEGORY</label>
    <select name="category" id="category" v-model="category">
      <option value disabled>Select a Category</option>
      <option
        v-for="category in categories"
        :key="category.id"
        v-bind:value="category"
      >{{ category }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  data() {
    return {
      categories: ["Business", "Education", "Games"],
      category: ""
    };
  },
  methods: {
    sendData() {
      this.$emit("getCategory", { category: this.category });
    }
  },
  updated() {
    this.sendData();
  }
};
</script>

<style lang="scss">
.input-group-select {
  display: flex;
  flex-flow: column nowrap;
  margin: 12px 0px;

  label {
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  select {
    border: 1px solid transparent;
    border-radius: 2px;
    padding: 8px;
    font-size: 1rem;
    background-color: #fff;
  }
}

@media only screen and (max-width: 425px) {
  .input-group-select {
    margin: 16px 0px;

    label {
      font-size: 0.8rem;
    }

    select {
      padding: 10px;
      font-size: 0.8rem;
    }
  }
}
</style>