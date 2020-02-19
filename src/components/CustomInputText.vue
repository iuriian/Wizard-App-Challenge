<template>
  <div class="input-group-text">
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
.input-group-text {
  display: flex;
  flex-flow: column nowrap;
  margin: 14px 0px;

  label {
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  input {
    border: 1px solid transparent;
    border-radius: 2px;
    padding: 8px;
    font-size: 1rem;
  }
}

@media only screen and (max-width: 425px) {
  .input-group-text {
    margin: 16px 0px;

    label {
      font-size: 0.8rem;
    }

    input {
      padding: 10px;
      font-size: 0.8rem;
    }
  }
}
</style>