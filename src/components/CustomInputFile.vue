<template>
  <div class="input-group-file">
    <label for="icon">APP ICON</label>
    <div class="group-cta">
      <span class="group-text">Select a File</span>
      <input type="file" @change="getFile" name="icon" id="icon" value="Select a File" />
      <button class="created-button">SELECT A FILE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomInputFile",
  data: function() {
    return {
      icon: "https://via.placeholder.com/150"
    };
  },
  methods: {
    sendData() {
      this.$emit("getIcon", { icon: this.icon });
    },
    getFile(e) {
      var file = e.target.files[0];
      var reader = new FileReader();

      reader.onload = e => {
        this.icon = e.target.result;
        this.sendData();
      };
      reader.onerror = error => {
        alert(error);
      };

      reader.readAsDataURL(file);
    }
  }
};
</script>

<style lang="scss">
.input-group-file {
  label {
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .group-cta {
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 2px;
    font-size: 1rem;
    margin-top: 8px;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    color: #886c6c;

    input[type="file"] {
      width: 100%;
      height: 30px;
      opacity: 0;
      position: absolute;
      z-index: 999;
    }

    .created-button {
      background-color: #0297e5;
      border: unset;
      border-radius: 2px;
      color: #fff;
      padding: 8px;
    }
  }
}

@media only screen and (max-width: 425px) {
  .input-group-file {
    margin: 16px 0px;

    label {
      font-size: 0.8rem;
    }

    .group-text {
      font-size: 0.8rem;
    }
  }
}
</style>