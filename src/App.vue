<template>
  <div id="app">
    <header-vue></header-vue>
    <!-- <ProfileVue /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import HeaderVue from "./component/header/Header.vue";
// import ProfileVue from "./component/Profile.vue";
export default {
  name: "App",
  components: {
    HeaderVue,
    // ProfileVue,
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
// .body-ctn {
//   display: flex;
//   gap: 20px;
//   .body-ctn-nav-bar {
//     width: 8%;
//   }
//   .body-ctn-system {
//     width: 17%;
//     // flex: 1;
//   }
//   .body-ctn-body-content {
//     width: 75%;
//     // flex: 6;
//   }
// }
</style>
