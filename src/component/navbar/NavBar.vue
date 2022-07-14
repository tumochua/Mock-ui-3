<template>
  <div class="nav-ctn">
    <div v-for="getNavBar in getNavBars" :key="getNavBar.id">
      <div class="nav-bar-icon">
        <img :src="getNavBar.icon" alt="icon-nav" />
      </div>
    </div>
    <p class="nav-border"></p>
    <div class="nav-ctn-icon-back">
      <img src="../../assets/nav/icon-back.png" />
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
    // padding: 20px;
    padding: 30px 0px;
    text-align: center;
    cursor: pointer;
    &:hover {
      background: #007bc3;
    }
  }
  .nav-border {
    margin: 0 auto;
    width: 80%;
    border-bottom: 1px solid #dcdcdc;
    margin-top: 10px;
  }
  .nav-ctn-icon-back {
    text-align: center;
    margin-top: 190px;
    cursor: pointer;
  }
}
</style>
