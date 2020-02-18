<template>
  <div class="input-group">
    <label for="name">APP NAME</label>
    <input
      type="text"
      v-model="name"
      placeholder="Enter App Display Name"
      name="name"
      id="name"
      @keyup="sendData"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInputText",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    sendData() {
      this.$emit("getName", { name: this.name });
    }
  }
};
</script>

<style lang="scss">
.input-group {
  display: flex;
  flex-flow: column nowrap;
  margin: 12px 0px;

  label {
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  input {
    border: 1px solid transparent;
    border-radius: 2px;
    // min-height: 36px;
    padding: 8px;
    font-size: 1rem;
  }
}
</style>