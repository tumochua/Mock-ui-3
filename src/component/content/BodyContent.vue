<template>
  <div class="body-ctn">
    <h4>PEOPLE設定一覧</h4>
    <div v-for="getbodyContent in getbodyContents" :key="getbodyContent.id">
      <h2>{{ getbodyContent.title }}</h2>
      <div class="body-carts">
        <div
          v-for="contents in getbodyContent.personDesgin"
          :key="contents.id"
          class="body-cart-item"
        >
          <div>
            <div class="body-cart-item-header">
              <img :src="contents.icon" class="body-carts-icon" />
              <div class="body-carts-title">{{ contents.title }}</div>
            </div>
            <div class="body-carts-description">
              {{ contents.description }}
            </div>
          </div>
        </div>
      </div>
      <div class="body-label-management">
        <div
          v-for="contents in getbodyContent.labelManagement"
          :key="contents.id"
          class="cart-label-managements"
        >
          <div class="cart-label-managements-item">
            <div class="cart-label-managements-header">
              <img :src="contents.icon" class="cart-label-managements-icon" />
              <div class="cart-label-managements-title">
                {{ contents.title }}
              </div>
            </div>
            <div class="cart-label-managements-description">
              {{ contents.description }}
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
  name: "BodyContent",
  computed: {
    ...mapState({
      getbodyContents: (state) => state.bodyContent,
    }),
  },
};
</script>

<style scoped lang="scss">
.body-ctn {
  .body-ctn {
    display: flex;
    flex-direction: column;
    .body-carts {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-left: -12px;
      .body-cart-item {
        width: 30%;
        margin-bottom: 32px;
        margin-left: 10px;
        display: flex;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        cursor: pointer;
        &:hover {
          transform: translateY(-2px);
          box-shadow: 27px 26px 66px -6px rgba(0, 0, 0, 0.4);
          -webkit-box-shadow: 27px 26px 66px -6px rgba(0, 0, 0, 0.4);
          -moz-box-shadow: 27px 26px 66px -6px rgba(0, 0, 0, 0.4);
        }
        // padding: 20px;
        .body-cart-item-header {
          display: flex;
          border-bottom: 1px solid #dcdcdc;
          padding: 20px;
          background: #f8f8f8;
          .body-carts-icon {
            margin-right: 8px;
          }
          .body-carts-title {
            align-self: center;
          }
        }
        .body-carts-description {
          padding: 20px;
        }
      }
    }
    .body-label-management {
      margin-top: 20px;
      display: flex;
      // flex-wrap: wrap;
      gap: 30px;

      .cart-label-managements {
        // margin-bottom: 32px;
        // margin-right: 10px;
        .cart-label-managements-item {
          border: 1px solid #dcdcdc;
          border-radius: 4px;
          cursor: pointer;
          &:hover {
            transform: translateY(-2px);
            box-shadow: 27px 26px 66px -6px rgba(0, 0, 0, 0.4);
            -webkit-box-shadow: 27px 26px 66px -6px rgba(0, 0, 0, 0.4);
            -moz-box-shadow: 27px 26px 66px -6px rgba(0, 0, 0, 0.4);
          }
          .cart-label-managements-header {
            display: flex;
            border-bottom: 1px solid #dcdcdc;
            padding: 20px;
            background: #f8f8f8;
            .cart-label-managements-title {
              align-self: center;
            }
            .cart-label-managements-icon {
              margin-right: 10px;
            }
          }
          .cart-label-managements-description {
            padding: 20px;
          }
        }
      }
    }
  }
}
</style>
