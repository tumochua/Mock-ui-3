<template>
  <div class="nav-ctn">
    <div v-for="getNavBar in getNavBars" :key="getNavBar.id">
      <div class="nav-bar-icon">
        <img :src="getNavBar.icon" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapState({
      getNavBars: (state) => state.navBar,
    }),
  },
};
</script>

<style scoped lang="scss">
.nav-ctn {
  .nav-bar-icon {
    margin-top: 40px;
  }
}
</style>
