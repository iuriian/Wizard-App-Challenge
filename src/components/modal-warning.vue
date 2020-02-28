<template>
  <div class="modal-background">
    <div class="modal-wrapper">
      <i class="fas fa-times" @click="closeModal"></i>
      <div class="modal-container warning">
        <img src="../assets/gif/warning-blink.gif" alt srcset />
        <h3>Todos os seus dados serão perdidos.</h3>
        <p>Deseja prosseguir?</p>
        <div class="cta">
          <button @click="closeModal">SIM</button>
          <a @click="closeModal">NÃO</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalWarning",
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
      cursor: pointer;
    }

    .modal-container.warning {
      background-color: #fbfbfb;
      padding: 6% 8%;
      border-radius: 4px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      min-width: 400px;
      color: #404040;

      h3 {
        margin-bottom: 16px;
      }

      p {
        margin-top: 0px;
      }

      .cta {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        button {
          background-color: #0297e5;
          color: #fff;
          border: 1px transparent;
          border-radius: 4px;
          min-width: 80px;
          min-height: 30px;
          margin-right: 20px;
          cursor: pointer;
        }

        a {
          text-decoration: underline;
          color: red;
          cursor: pointer;
          font-size: 14px;
        }
      }
    }
  }
}
</style>