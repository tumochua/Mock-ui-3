<template>
  <div>
    <div class="body-ctn">
      <nav-bar-vue class="body-ctn-nav-bar"></nav-bar-vue>
      <system-vue class="body-ctn-system"></system-vue>
      <body-content-vue class="body-ctn-body-content"></body-content-vue>
    </div>
  </div>
</template>

<script>
import NavBarVue from "./navbar/NavBar.vue";
import SystemVue from "./system/System.vue";
import BodyContentVue from "./content/BodyContent.vue";

export default {
  name: "ProfileVue",
  components: {
    NavBarVue,
    SystemVue,
    BodyContentVue,
  },
};
</script>

<style lang="scss">
.body-ctn {
  display: flex;
  gap: 20px;
  .body-ctn-nav-bar {
    width: 8%;
  }
  .body-ctn-system {
    width: 17%;
    // flex: 1;
  }
  .body-ctn-body-content {
    width: 75%;
    // flex: 6;
  }
}
</style>
