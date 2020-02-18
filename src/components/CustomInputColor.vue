<template>
  <div class="input-group">
    <label for="color">ICON'S BACKGROUND COLOR</label>
    <div class="group-cta">
      <span class="picker-text">Pick a color</span>
      <span class="selected-color" v-bind:style="{ 'background-color': color }">{{ color }}</span>
      <input type="color" v-model="color" name="color" id="color" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomInputColor",
  data: function() {
    return {
      color: "#000"
    };
  },
  methods: {
    sendData() {
      this.$emit("getIconBackground", { iconBackground: this.color });
    }
  },
  updated() {
    this.sendData();
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

  .group-cta {
    position: relative;
    border-radius: 2px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #886c6c;

    .picker-text {
      position: absolute;
      left: 10px;
    }

    .selected-color {
      color: #fff;
      background: #000;
      position: absolute;
      right: 0;
      width: 30%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }

    input[type="color"] {
      width: 70%;
      margin-right: 30%;
      padding: 8px;
      min-height: 36px;
      opacity: 0;
    }
  }
}
</style>