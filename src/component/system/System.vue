<template>
  <div class="system-ctn">
    <div class="systems">
      <div class="system-header">
        <img src="../../assets/system/icon.png" class="system-header-icon" />
        <h2>システム設定</h2>
      </div>
      <h2 class="system-people">PEOPLE設定一覧</h2>
      <div class="system-body">
        <div v-for="getDataSystem in getDataSystems" :key="getDataSystem.id">
          <div
            class="system-body-dropdown"
            @click="handleShowDropdown(getDataSystem.id)"
          >
            <img :src="getDataSystem.icon" class="system-body-dropdown-icon" />
            <h3>{{ getDataSystem.title }}</h3>
          </div>
          <div v-if="getDataSystem.personDesgin && getDataSystem.status">
            <div>
              <div
                :value="system.id"
                v-for="system in getDataSystem.personDesgin"
                :key="system.id"
                class="system-body-dropdown-item"
              >
                {{ system.title }}
              </div>
            </div>
          </div>

          <div v-if="getDataSystem.labelManagement && getDataSystem.status">
            <div>
              <div
                :value="system.id"
                v-for="system in getDataSystem.labelManagement"
                :key="system.id"
                class="system-body-dropdown-item"
              >
                {{ system.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SystemVue",

  computed: {
    ...mapState({
      getDataSystems: (state) => state.system,
    }),
  },
  methods: {
    handleShowDropdown(id) {
      this.$store.dispatch("HANDLE_SHOW_DROPDOWN", id);
    },
  },
};
</script>

<style scoped lang="scss">
.system-ctn {
  background: #f8f8f8;
  border-left: 1px solid #dcdcdc;
  padding: 12px 20px 0 12px;

  .systems {
    .system-header {
      display: flex;
      .system-header-icon {
        object-fit: contain;
      }
    }
    .system-body {
      .system-body-dropdown-item {
        padding: 10px;
        &:hover {
          background: #ffff;
          cursor: pointer;
        }
      }
      .system-body-dropdown {
        display: flex;
        cursor: pointer;
        .system-body-dropdown-icon {
          object-fit: contain;
        }
      }
    }
  }
  .system-people {
    color: #007bc3;
    padding-bottom: 10px;
    border-bottom: 1px solid #dcdcdc;
  }
}
</style>
