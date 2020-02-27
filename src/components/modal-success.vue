<template>
  <div class="modal-background">
    <div class="modal-wrapper">
      <i class="fas fa-times" @click="closeModal"></i>
      <div class="modal-container">
        <h3>Seu aplicativo foi criado com sucesso!</h3>
        <img src="../assets/gif/check-circle.gif" alt srcset />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalSuccess",
  methods: {
    closeModal() {
      this.$emit("close", { modal: false });
    }
  }
};
</script>

<style lang="scss">
.modal-background {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: #00000080;

  .modal-wrapper {
    position: relative;

    .fa-times {
      top: 10px;
      right: 10px;
      position: absolute;
    }
    .modal-container {
      background-color: #fff;
      padding: 6% 10%;
      border-radius: 4px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      color: #008000;

      h3 {
        margin-top: 0px;
      }
    }
  }
}
</style>