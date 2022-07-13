<template>
  <div id="app">
    <header-vue></header-vue>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import HeaderVue from "./component/header/Header.vue";
export default {
  name: "App",
  components: {
    HeaderVue,
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

<style>
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
</style>
