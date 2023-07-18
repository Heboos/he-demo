<!-- 
 * @Author: xiaohe
 * @Date: 2023-06-07 10:54:51
 * @LastEditors: xiaohe xiaohe@moziapi.com
 * @LastEditTime: 2023-07-18 12:14:31
 * @FilePath: /chromeProductList/src/components/HelloWorld.vue
-->
<script setup lang="ts">
// import { ref, watch } from "vue";
// import { InfoCircleIcon, JumpIcon, SwapIcon } from "tdesign-icons-vue-next";
// import { productInfo, initData, goshopdora } from './index';
// const itemid = ref("123123");
// const site = ref("sg");

// const productList: any = ref(initData(itemid.value));
// const salesAmount30DayUnitType = ref(true);
// const salesAmountUnitType = ref(true);
// const exChangeRate: any = ref({
//   br: 0.68999,
//   tw: 4.3175,
//   sg: 0.1889,
//   th: 4.8865,
//   ph: 7.8921,
//   vn: 3297.0,
//   id: 2086.6,
//   mx: 2.44903,
//   my: 0.64699,
// });
// const productShopeeList: any = ref({
//   brand: "apple",
//   image: "5fba173d834f2615c08f7cf4f22a6cac",
//   images: [
//     "5fba173d834f2615c08f7cf4f22a6cac",
//     "28890d386e9d185624400bcad294178a",
//     "e27321ae1821c506a39cedfef4a43bad",
//     "a248a6bb75ef71251311c9f01d748560",
//     "b25cf81360cd99631bdf0a846428021e",
//     "1d757feb8be3e87cd80666e4ebc5c3b0",
//     "5ae0b1ba248e61fc71b727ef66fa697d",
//     "f3a09047eca2fd474a478445501555a1",
//     "0a1e750b06659a410514e9f51ce36fab",
//   ],
//   itemid: 6250395408,
//   price: 647000,
//   shopid: 139268812,
//   sold: 160,
//   video_info_list: [],
//   historical_sold: 4199,
//   ctime: 1599027817,
//   name: "3 Month Warranty 116 Plus Smart Watch Blood Pressure Heart Rate Monitor Waterproof Fitness Tracker Watch Smart Band",
//   price_max: 647000,
//   price_min: 647000,
//   checked: true,
// });

// const productBasicInfoList: any = ref({
//   itemId: "6250395408",
//   username: "chengaii.sg",
//   name: "chengaii.sg",
//   brand: "apple1",
//   cateId: "100270",
//   cateChPath: "手机平板与配件-智能穿戴设备-智能手表 & 手环",
//   cateLocalPath: "",
//   cateName: "智能手表 & 手环",
//   salestMRank: 9,
//   shelfTime: "1598976000",
//   shelfTimeToNow: 29705,
//   sellerSource: 2,
// });
// const productInfoList: any = ref({
//   itemId: "6250395408",
//   sales1Day: 2713,
//   sales7Day: null,
//   sales30Day: 201,
//   salesGrowthRateM: -147,
//   salesAmountM: "154604376",
//   sales: 201,
//   salesAmount: "154604376",
//   monitor: false,
// });
// watch(
//   () => [
//     productShopeeList.value,
//     productBasicInfoList.value,
//     productInfoList.value,
//   ],
//   (newValue) => {
//     if (newValue[0] || newValue[1] || newValue[2]) {
//       productInfo(productList.value, newValue, exChangeRate.value, site.value);
//     }
//   },
//   { deep: true, immediate: true }
// );
</script>

<template>

</template>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
#shopdora-shopee-product-detail {
  margin-top: 30px;
  width: 665px;
  height: 253px;
  background: #ffffff;
  border: 1px solid #fd6012;
  border-radius: 2px;
  .detail-top {
    display: flex;
    justify-content: space-between;
    .shopdoraLogo {
      width: 340px;
      display: flex;
      justify-content: space;
      .goShopdora {
        font-size: 20px;
        margin: 16px 0 2px 12px;
        cursor: pointer;
        color: #fd6012;
      }
      .logo {
        display: flex;
        justify-content: space-evenly;
        width: 296px;
        height: 47px;
        background-image: linear-gradient(270deg, #ff9929 0%, #fd6012 100%);
        border-radius: 0px 0 32px 0;
        background-color: #fd6012;

        .img {
          height: 24px;
          margin-top: 11px;

          img {
            height: 100%;
          }
        }

        .logoText {
          width: 142px;
          height: 18px;
          margin-top: 12px;
          line-height: 18px;
          color: #fff;
          border: 1px solid #ffffff;
          border-radius: 9px 10px 10px 0;
          font-size: 12px;
          padding-left: 5px;
        }
      }
    }
    .detail-top-button {
      margin-top: 15px;
      width: 325px;
      :deep(.t-button) {
        margin-right: 8px;
        &:nth-child(3) {
          margin-right: 16px;
        }
      }
    }
  }
  .detail-info {
    margin-top: 20px;
    .detail-info-list {
      width: 100%;
      padding: 0 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 20px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      font-size: 14px;
      color: #000000e6;
      line-height: 20px;
      .detail-info-item {
        display: flex;
        justify-content: start;
        .detail-info-item-main {
          display: flex;
          justify-content: start;
          margin-left: 5px;
          .item-icon {
            margin-left: 5px;
            margin-bottom: 3px;
            color: #fd6012;
            cursor: pointer;
          }
          .cursor {
            cursor: pointer;
          }
          .sellerSourceTips {
            width: fit-content;
            height: 16px;
            line-height: 16px;
            padding: 0 3px;
            background-image: linear-gradient(270deg, #ff9929 0%, #fd6012 100%);
            border-radius: 3px;
            font-size: 12px;
            color: #ffffff;
            margin-left: 5px;
            margin-top: 2px;
            text-align: center;
          }
        }
        .mainColor {
          color: #fd6012;
        }
      }
      .detail-info-items {
        display: flex;
        justify-content: start;

        .detail-info-item {
          width: 225px;
        }
      }
    }
    .shopdora-hr {
      width: 633px;
      height: 1px;
      background: #e7e7e7;
      margin: 12px auto;
    }
  }
  .detail-buttom {
    padding-left: 16px;
    margin-top: 16px;
    text-align: left;
    :deep(.t-button) {
      margin-right: 8px;
    }
  }
}
</style>
<style lang="less">
.t-button--variant-base.t-button--theme-primary:not(.t-is-disabled):not(
    .t-button--ghost
  ):hover {
  --ripple-color: rgba(255, 255, 255, 0.9) !important;
}

.t-button--variant-base.t-button--theme-primary {
  background-color: #fd6012 !important;
  border-color: #fd6012 !important;
}

.t-button--variant-outline.t-button--theme-primary:hover {
  border-color: #fd6012 !important;
  color: #fd6012 !important;
  background-color: rgba(255, 255, 255, 0.9) !important;
}

.t-button--variant-outline.t-button--theme-primary:hover .login-btn {
  background-color: #fd6012 !important;
  border-color: #fd6012 !important;
}

.t-pagination__number:active,
.t-pagination__number.t-is-current {
  background-color: #fd6012 !important;
  border-color: #fd6012 !important;
}

.t-table__sort-icon--active {
  color: #fd6012 !important;
}
.t-button--variant-base.t-button--theme-primary:not(.t-is-disabled):not(
    .t-button--ghost
  ) {
  --ripple-color: #fd6012;
}
.t-button {
  &:focus {
    outline: #fd6012;
  }
}
</style>
