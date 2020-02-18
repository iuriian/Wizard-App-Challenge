<template>
  <div id="app" class="container">
    <div class="card">
      <div class="columns is-desktop is-row-tablet is-vcentered">
        <i class="fas fa-times"></i>
        <div class="column is-8 is-two-thirds-tablet">
          <div class="entry-data">
            <h4 class="title">Create Your App</h4>
            <custom-input-text @getName="setName"></custom-input-text>
            <custom-input-file @getIcon="setIcon"></custom-input-file>
            <custom-input-color @getIconBackground="setIconBackground"></custom-input-color>
            <custom-select @getCategory="setCategory"></custom-select>
          </div>
        </div>
        <div class="column">
          <h4 class="title mb-12">APP'S CARD PREVIEW</h4>
          <card-preview-app
            :name="name"
            :icon="icon"
            :iconBackground="iconBackground"
            :category="category"
          ></card-preview-app>
          <div class="container has-text-centered">
            <button class="button" @click="saveApp">SAVE APP</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInputTextVue from "./components/CustomInputText.vue";
import CustomInputColorVue from "./components/CustomInputColor.vue";
import CustomSelectVue from "./components/CustomSelect.vue";
import CardPreviewAppVue from "./components/CardPreviewApp.vue";
import CustomInputFileVue from "./components/CustomInputFile.vue";

export default {
  name: "App",
  components: {
    "custom-input-text": CustomInputTextVue,
    "custom-input-file": CustomInputFileVue,
    "custom-input-color": CustomInputColorVue,
    "custom-select": CustomSelectVue,
    "card-preview-app": CardPreviewAppVue
  },
  data() {
    return {
      name: "",
      icon: "",
      iconBackground: "",
      category: ""
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

    saveApp() {
      var appForm = {};

      appForm["name"] = this.name;
      appForm["icon"] = this.icon;
      appForm["background"] = this.iconBackground;
      appForm["category"] = this.category;

      console.log(appForm);
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
@import url("../node_modules/bulma/bulma.sass");

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

.card {
  background-color: #0297e5;
  border-radius: 4px;
  box-shadow: 4px 4px 12px 0px #00000094;
  padding: 22px;
  max-width: 70%;
  margin: auto;

  i.fas.fa-times {
    float: right;
    font-size: 1.4rem;
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

  &::after {
    content: "";
    background-color: #fff;
    height: 100%;
    width: 1px;
    position: absolute;
    right: 0;
    top: 0;
  }
}

.button {
  margin-top: 26px;
  color: #000;
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 8px 22px;
}

.title.mb-12 {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 12px;
}

@media only screen and (max-width: 425px) {
  .card {
    max-width: 100vw;
    min-height: 100vh;
    border-radius: unset;
  }

  .entry-data {
    padding-right: 0px;

    &::after {
      height: 1px;
      width: 100%;
      top: unset;
      margin: 20px 0px 0px 0px;
    }
  }

  .title.mb-12 {
    margin-top: 46px;
  }

  .button {
    width: 100%;
    padding: 16px;
    border: 1px transparent;
    color: #fff;
    background-color: #0297e5;
    border: 1px solid #fff;
    box-shadow: 1px 1px 4px 0px #fff
  }
}

@media only screen and (min-width: 426px) and (max-width: 768px) {
  .card {
    max-width: 100%;
    height: 100vh;
  }

  .entry-data {
    padding-right: 48px;
  }

  .entry-data::after {
    height: 100%;
    width: 1px;
    top: 0;
    margin: 12px 0px;
  }

  .is-row-tablet {
    flex-direction: row;
    flex-wrap: nowrap;
    display: flex;
  }

  .is-8-tablet {
    flex: 8;
  }

  .is-row-tablet .column {
    flex: 1;
  }

  .column:not(.is-two-thirds-tablet) {
    padding-left: 26px;
  }

  .is-row-tablet .is-two-thirds-tablet {
    flex: 2;
  }
}
</style>
