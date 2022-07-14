<template>
  <div class="header-ctn">
    <div class="header-left">
      <img src="../../assets/header/icon-header.png" class="header-left-icon" />
      <label class="wrapper">
        <img src="../../assets/header/icon-search.png" class="search-icon" />
        <input placeholder="メンバーを検索" class="wrapper-input" />
      </label>
    </div>
    <div class="header-right">
      <div class="header-right-item">
        <div class="header-right-item-left">
          <img src="../../assets/header/icon-notification.png" />
          <img
            src="../../assets/header/icon-dots.png"
            class="header-right-item-left-dots"
          />
          <img
            src="../../assets/header/icon-cydas.png"
            class="header-right-item-left-cydas"
          />
        </div>
        <div class="header-right-item-right">
          <p class="header-right-item-right-text">石原 由梨</p>
          <div>
            <img
              src="../../assets/header/header-avatar.png"
              class="header-right-avatar"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderVue",
};
</script>

<style scoped lang="scss">
.header-ctn {
  height: 64px;
  box-shadow: 0px 0px 16px rgba(102, 102, 102, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border-bottom: 1px solid 0px 0px 16px rgba(102, 102, 102, 0.1);
  .header-left {
    margin-left: 20px;
    display: flex;

    .header-left-icon {
      object-fit: scale-down;
      margin-right: 38px;
    }

    .wrapper {
      display: flex;
      width: 320px;
      height: 40px;

      position: relative;
      .search-icon {
        object-fit: scale-down;
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .wrapper-input {
        border-radius: 27px;
        width: 100%;
        border: none;
        outline: none;
        background: #f4f7fb;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 32px;
      }
    }
  }
  .header-right {
    margin-right: 24px;
    .header-right-item {
      display: flex;
      align-content: center;
      .header-right-item-left {
        .header-right-item-left-dots {
          margin-left: 16px;
          margin-right: 24px;
        }
        .header-right-item-left-cydas {
        }
      }
      .header-right-item-right {
        display: flex;
        position: relative;
        .header-right-item-right-text {
          margin-right: 7px;
          margin-left: 24px;
        }
        .header-right-avatar {
          border-radius: 100%;
        }
      }
      .header-right-item-right::after {
        position: absolute;
        content: "";
        width: 1px;
        background-color: #dcdcdc;
        top: 10px;
        left: 10px;
        height: 24px;
      }
    }
  }
}
</style>
