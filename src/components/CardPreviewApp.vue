<template>
  <div class="card-preview">
    <div class="card-header" v-bind:style="{ 'background-color': iconBackground }">
      <img v-bind:src="icon ? icon : 'https://via.placeholder.com/150'" alt="ícone do aplicativo" />
    </div>
    <div class="card-body">
      <h4>{{ name ? name : 'App Name' }}</h4>
      <p>{{ category ? category : 'App Category' }}</p>
      <p>New App</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPreviewApp",
  props: {
    name: String,
    category: String,
    icon: String,
    iconBackground: String
  }
};
</script>

<style lang="scss">
.card-preview {
  border-radius: 4px;
  box-shadow: 4px 4px 12px 0px #00000094;

  .card-header {
    display: flex;
    padding: 16px 0px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: #000;

    img {
      border-radius: 50%;
      max-width: 46%;
      margin: auto;
    }
  }

  .card-body {
    border: 1px solid transparent;
    padding: 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #fff;

    h4 {
      font-weight: 600;
      font-size: 1.2rem;
      margin: 0px 0px 2px;
    }

    p {
      font-size: 1rem;

      &:last-child {
        font-size: 0.9rem;
        font-weight: 600;
        margin-top: 10px;
      }
    }
  }
}

@media only screen and (max-width: 425px) {
  .card-preview {
    display: flex;
    flex-flow: row nowrap;

    .card-header {
      flex: 1;
      border-top-right-radius: unset;
      border-bottom-left-radius: 4px;
      padding: 20px 0px;

      img {
        max-width: 60%;
      }
    }

    .card-body {
      flex: 2;
      padding: 8px;
      border-bottom-left-radius: unset;
      border-top-right-radius: 4px;

      p {
        margin: 6px 0px 12px;

        &:last-child {
          margin: 0;
        }
      }
    }
  }
}

@media only screen and (min-width: 426px) and (max-width: 767px) {
  .card-preview {
    display: flex;
    flex-flow: row nowrap;

    .card-header {
      flex: 1;
      border-top-right-radius: unset;
      border-bottom-left-radius: 4px;
      padding: 20px 0px;

      img {
        max-width: 60%;
      }
    }

    .card-body {
      flex: 2;
      padding: 8px;
      border-bottom-left-radius: unset;
      border-top-right-radius: 4px;

      p {
        margin: 6px 0px 12px;

        &:last-child {
          margin: 0;
        }
      }
    }
  }
}
</style>