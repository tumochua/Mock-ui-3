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

  .body-ctn-nav-bar {
    width: 72px;
  }
  .body-ctn-system {
    width: 240px;
    // flex: 1;
  }
  .body-ctn-body-content {
    /* width: 75%; */
    display: 1;
    flex: 1;
    padding: 45px 100px;
  }
}
</style>
