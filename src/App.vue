<template>
  <div id="app" class="container">
    <div class="card">
      <i class="fas fa-times"></i>
      <div class="row">
        <div class="col-12 col-sm-12 col-md-8 col-lg-8 line-right">
          <div class="entry-data">
            <h4 class="title">Create Your App</h4>
            <custom-input-text @getName="setName"></custom-input-text>
            <custom-input-file @getIcon="setIcon"></custom-input-file>
            <custom-input-color @getIconBackground="setIconBackground"></custom-input-color>
            <custom-select @getCategory="setCategory"></custom-select>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4">
          <h4 class="title-preview">APP'S CARD PREVIEW</h4>
          <card-preview-app
            :name="name"
            :icon="icon"
            :iconBackground="iconBackground"
            :category="category"
          ></card-preview-app>
          <div class="container-button">
            <button class="button" @click="saveApp">SAVE APP</button>
          </div>
        </div>
      </div>
    </div>
    <modal-success v-if="showModal" @close="closeModal"></modal-success>
  </div>
</template>

<script>
import CustomInputTextVue from "./components/CustomInputText.vue";
import CustomInputColorVue from "./components/CustomInputColor.vue";
import CustomSelectVue from "./components/CustomSelect.vue";
import CardPreviewAppVue from "./components/CardPreviewApp.vue";
import CustomInputFileVue from "./components/CustomInputFile.vue";

import ModalSuccessVue from "./components/modal-success";

export default {
  name: "App",
  components: {
    "custom-input-text": CustomInputTextVue,
    "custom-input-file": CustomInputFileVue,
    "custom-input-color": CustomInputColorVue,
    "custom-select": CustomSelectVue,
    "card-preview-app": CardPreviewAppVue,
    "modal-success": ModalSuccessVue
  },
  data() {
    return {
      name: "",
      icon: "",
      iconBackground: "",
      category: "",
      showModal: false
    };
  },
  methods: {
    setName(payload) {
      this.name = payload.name;
    },

    setIcon(payload) {
      this.icon = payload.icon;
    },

    setIconBackground(payload) {
      this.iconBackground = payload.iconBackground;
    },

    setCategory(payload) {
      this.category = payload.category;
    },

    closeModal(payload) {
      this.showModal = payload.modal;
    },

    saveApp() {
      var appForm = {};

      appForm["name"] = this.name;
      appForm["icon"] = this.icon;
      appForm["background"] = this.iconBackground;
      appForm["category"] = this.category;

      this.showModal = true;
      console.log(appForm);
    }
  }
};
</script>

<style lang="scss">
@import url("../node_modules/bootstrap/dist/css/bootstrap-grid.css");
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

* {
  box-sizing: border-box;
}

.container {
  min-height: 100%;
  display: flex;
}

.card {
  width: 90%;
  background-color: #0297e5;
  border-radius: 4px;
  box-shadow: 4px 4px 12px 0px #00000094;
  padding: 30px;
  margin: auto;
  position: relative;

  i.fas.fa-times {
    font-size: 1.4rem;
    position: absolute;
    top: 12px;
    right: 12px;
  }

  .line-right::after {
    content: "";
    background-color: #fff;
    height: 100%;
    width: 1px;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 12px;
  }
}

.entry-data {
  position: relative;
  padding-right: 38px;

  .title {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0px 0px 22px;
  }
}

.title-preview {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 12px;
}

.container-button {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  .button {
    padding: 12px 26px;
    color: #fff;
    background-color: #0297e5;
    border: 1px solid #fff;
    box-shadow: 1px 1px 4px 0px #fff;
    margin-top: 26px;
    font-weight: 600;
    font-size: 0.8rem;
    border-radius: 4px;
  }
}

@media screen and (max-width: 425px) {
  .container {
    padding: 0px 0px;
  }

  .card {
    border-radius: unset;
    min-width: 100%;

    .line-right::after {
      width: 92%;
      margin: 0px 14px;
      height: 1px;
      top: unset;
      bottom: 0px;
    }
    .entry-data {
      padding: 0px 0px 24px;
    }

    .button {
      width: 100%;
    }
  }
}

@media screen and (min-width: 426px) and (max-width: 767px) {
  .card {
    .line-right::after {
      width: 92%;
      margin: 0px 16px;
      height: 1px;
      top: unset;
      bottom: 0px;
    }

    .entry-data {
      padding: 0px 0px 24px;
    }

    .button {
      width: 100%;
    }
  }
}
</style>
