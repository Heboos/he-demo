<!--
 * @Author: xiaohe
 * @Date: 2023-06-07 10:54:51
 * @LastEditors: xiaohe xiaohe@moziapi.com
 * @LastEditTime: 2023-07-18 12:19:35
 * @FilePath: /chromeProductList/src/App.vue
-->
<script setup lang="ts">
// import { InfoCircleIcon, JumpIcon, SwapIcon } from "tdesign-icons-vue-next";
// import { ref, watch } from "vue";
// import {
//   productBrand,
//   productTimeDay,
//   productTime,
//   productSalesRateD30,
// } from "../src/hooks/productListInfo";

// import HelloWorld from "./components/HelloWorld.vue";

// const itemid = ref('123123');
// const site = ref('sg');
// const goshopdora = () => {};

// const productList: any = ref({
//   // 商品id
//   itemId: itemid.value,
//   // 价格
//   price: null,
//   price_cny: null,
//   price_max: null,
//   price_max_cny: null,
//   price_min: null,
//   price_min_cny: null,
//   // 店铺
//   username: null,
//   // 店铺类型
//   sellerSource: 0,
//   // 品牌
//   brand: null,
//   // 搜索类目
//   cateLocalPath: null,
//   // 本地语言类目
//   cateName: null,
//   // 中文类目
//   cateChPath: null,
//   // 月销量排名
//   salestMRank: null,
//   // 上架时间
//   ctime: null,
//   // 上架天数
//   ctimeDay: null,
//   // 近1日销量
//   sales1Day: null,
//   // 近7日销量
//   sales7Day: null,
//   // 近30日销量
//   sales30Day: null,
//   // 总销量
//   sales: null,
//   // 近30日增长率
//   salesGrowthRateM: null,
//   // 近30日销售额（本土）
//   salesAmount30Day: null,
//   // 近30日销售额（人民币）
//   salesAmount30DayUnit: null,
//   // 总销售额（本土）
//   salesAmount: null,
//   // 总销售额（人民币）
//   salesAmountUnit: null,
// });
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
//   brand: 'apple',
//   image: '5fba173d834f2615c08f7cf4f22a6cac',
//   images: [
//     '5fba173d834f2615c08f7cf4f22a6cac',
//     '28890d386e9d185624400bcad294178a',
//     'e27321ae1821c506a39cedfef4a43bad',
//     'a248a6bb75ef71251311c9f01d748560',
//     'b25cf81360cd99631bdf0a846428021e',
//     '1d757feb8be3e87cd80666e4ebc5c3b0',
//     '5ae0b1ba248e61fc71b727ef66fa697d',
//     'f3a09047eca2fd474a478445501555a1',
//     '0a1e750b06659a410514e9f51ce36fab',
//   ],
//   itemid: 6250395408,
//   price: 647000,
//   shopid: 139268812,
//   sold: 160,
//   video_info_list: [],
//   historical_sold: 4199,
//   ctime: 1599027817,
//   name: '3 Month Warranty 116 Plus Smart Watch Blood Pressure Heart Rate Monitor Waterproof Fitness Tracker Watch Smart Band',
//   price_max: 647000,
//   price_min: 647000,
//   checked: true,
// });

// const productBasicInfoList: any = ref({
//   itemId: '6250395408',
//   username: 'chengaii.sg',
//   name: 'chengaii.sg',
//   brand: 'apple1',
//   cateId: '100270',
//   cateChPath: '手机平板与配件-智能穿戴设备-智能手表 & 手环',
//   cateLocalPath: '',
//   cateName: '智能手表 & 手环',
//   salestMRank: 9,
//   shelfTime: '1598976000',
//   shelfTimeToNow: 29705,
//   sellerSource: 2,
// });
// const productInfoList: any = ref({
//   itemId: '6250395408',
//   sales1Day: 2713,
//   sales7Day: null,
//   sales30Day: 201,
//   salesGrowthRateM: -147,
//   salesAmountM: '154604376',
//   sales: 201,
//   salesAmount: '154604376',
//   monitor: false,
// });
// watch(
//   () => [productShopeeList.value, productBasicInfoList.value, productInfoList.value],
//   (newValue) => {
//     if (newValue[0] || newValue[1] || newValue[2]) {
//       productList.value.brand = productBrand(newValue[0]?.brand, newValue[1]?.brand);
//       productList.value.ctime = productTime(newValue[0]?.ctime, newValue[1]?.shelfTime);
//       productList.value.ctimeDay = productTimeDay(newValue[0]?.ctime, newValue[1]?.shelfTime);
//       productList.value.cateName = newValue[1]?.cateName ?? null;
//       productList.value.cateChPath = newValue[1]?.cateChPath ?? null;
//       productList.value.cateLocalPath = newValue[1]?.cateLocalPath ?? null;
//       productList.value.salestMRank = newValue[1]?.salestMRank ?? null;
//       productList.value.username = newValue[1]?.username ?? null;
//       productList.value.sales1Day = newValue[2]?.sales1Day ?? null;
//       productList.value.sales7Day = newValue[2]?.sales7Day ?? null;
//       productList.value.sales30Day = newValue[0]?.sold ?? newValue[2]?.sales30Day;
//       productList.value.sales = newValue[0]?.historical_sold ?? newValue[2]?.sales;
//       productList.value.salesGrowthRateM = productSalesRateD30(newValue[2]?.salesGrowthRateM);
//       productList.price = newValue[0]?.price ? (newValue[0]?.price / 100000).toFixed(2) : null;
//       productList.price_cny = newValue[0]?.price
//         ? (newValue[0]?.price / 100000 / exChangeRate.value[site.value]).toFixed(2)
//         : null;
//       productList.price_max = newValue[0]?.price_max ? (newValue[0]?.price_max / 100000).toFixed(2) : null;
//       productList.price_max_cny = newValue[0]?.price_max
//         ? (newValue[0]?.price_max / 100000 / exChangeRate.value[site.value]).toFixed(2)
//         : null;
//       productList.price_min = newValue[0]?.price_min ? (newValue[0]?.price_min / 100000).toFixed(2) : null;
//       productList.price_min_cny = newValue[0]?.price_min
//         ? (newValue[0]?.price_min / 100000 / exChangeRate.value[site.value]).toFixed(2)
//         : null;
//       productList.value.salesAmount30Day = `$${productList.value.sales30Day * productList.price}`;
//       productList.value.salesAmount30DayUnit = `¥${productList.value.sales30Day * productList.price_cny}`;
//       productList.value.salesAmount = `$${productList.value.sales * productList.price}`;
//       productList.value.salesAmountUnit = `¥${productList.value.sales * productList.price_cny}`;
//     }
//   },
//   { deep: true, immediate: true },
// );
</script>

<template>
<div>yangdandan</div>
</template>

<style lang="less">
* {
  box-sizing: border-box;
}
#shopdora-list-item {
  width: 188px;
  height: fit-content;
  background: #fafafa;
  box-shadow: 0 1px 2px 0 #0000001a;
  border-bottom: 2px solid #fd6012;
  border-radius: 1px;
  padding: 8px;
  .shopdora-list-item-log {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img {
      height: 19px;

      img {
        height: 100%;
      }
    }
  }
  .shopdora-list-item-info {
    .shopdora-list-item-info-item {
      display: flex;
      justify-content: start;
      align-items: center;
      width: 100%;
      height: 16px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      font-size: 12px;
      color: #000000e6;
      line-height: 16px;
      margin-top: 6px;
      .shopdora-list-item-info-item-title {
        min-width: 28px;
        margin-right: 8px;
      }

      .shopdora-list-item-info-item-main {
        display: flex;
        justify-content: start;
        align-items: center;
        .shopdora-list-item-info-item-main-span {
          color: #000000;
        }
        .basic-info {
          color: #fd6012;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          line-height: 16px;
          max-width: 100px;
          word-break: break-all;
          overflow: hidden;
        }
        .span-cuesor {
          cursor: pointer;
        }
        .shopdora-list-item-info-item-main-icon {
          margin-left: 5px;
          margin-bottom: 2px;
          color: #fd6012;
          cursor: pointer;
        }
      }
      .sales-ranking {
        margin-top: -8px;
        color: #000000;
      }
    }
  }
  .shopdora-list-item-hr {
    width: 100%;
    height: 1px;
    background: #e7e7e7;
    margin: 8px 0 2px;
  }
  .shopdora-list-item-button {
    position: relative;
    .list-specification {
      position: absolute;
      height: 100px;
      width: 100px;
      border: 1px solid red;
      top: calc(-50% - 10px);

      .list-specification-right {
        position: absolute;
        left: 90px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1000;
      }
      .list-specification-left {
        position: absolute;
        left: -560px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1000;
      }
    }
    .shopdora-list-item-button-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
      .button {
        width: 82px;
        height: 20px;
        line-height: 20px;
        border: 1px solid #fd6012;
        border-radius: 2px;
        font-size: 12px;
        color: #fd6012;
        padding: 0;
        &:focus-visible,
        &:focus {
          outline: none;
        }
      }
      &:nth-child(2) {
        margin-top: 6px;
      }
    }
  }
}
</style>
