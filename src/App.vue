<template>
  <div id="app">
    <header-vue></header-vue>
    <div class="body-ctn">
      <nav-bar-vue class="body-ctn-nav-bar"></nav-bar-vue>
      <system-vue class="body-ctn-system"></system-vue>
      <body-content class="body-ctn-body-content"></body-content>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import HeaderVue from "./component/header/Header.vue";
import NavBarVue from "./component/navbar/NavBar.vue";
import SystemVue from "./component/system/System.vue";
import BodyContent from "./component/content/BodyContent.vue";
export default {
  name: "App",
  components: {
    HeaderVue,
    NavBarVue,
    SystemVue,
    BodyContent,
  },
  computed: {
    ...mapState({
      couter: (state) => state.couter,
    }),
    ...mapGetters(["getCouter"]),
  },

  methods: {
    handeClick() {
      this.$store.dispatch("increte");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  padding: 10px;
  background: #ffffff;
}
.body-ctn {
  display: flex;
  .body-ctn-nav-bar {
    width: 10%;
  }
  .body-ctn-system {
    width: 25%;
  }
  .body-ctn-body-content {
    width: 60%;
  }
}
</style>
