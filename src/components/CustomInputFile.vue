<template>
  <div class="input-group">
    <label for="icon">APP ICON</label>
    <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  name: "CustomInputFile",
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        dictDefaultMessage: "Select a File",
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
      }
    };
  }
};
</script>

<style lang="scss">
.input-group {
  #dropzone.dropzone {
    min-height: 18px;
    padding: 8px 8px;
    border: 1px transparent;
    border-radius: 2px;

    .dz-message {
      margin: 0;
      display: flex;
    }
  }
}
</style>