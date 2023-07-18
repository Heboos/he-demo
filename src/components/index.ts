// /*
//  * @Author: xiaohe
//  * @Date: 2022-12-12 22:25:00
//  * @LastEditors: xiaohe xiaohe@moziapi.com
//  * @LastEditTime: 2023-06-12 15:07:43
//  * @FilePath: /chromeProductList/src/components/index.ts
//  */
// import { ref, Ref, onUnmounted } from 'vue';
// import { productBrand, productTimeDay, productTime, productSalesRateD30 } from '../hooks/productListInfo';
// // import store from '@/store/index';

// /**
//  * counter utils
//  * @param duration
//  * @returns
//  */
// export const useCounter = (duration = 60): [Ref<number>, () => void] => {
//   let intervalTimer;
//   onUnmounted(() => {
//     clearInterval(intervalTimer);
//   });
//   const countDown = ref(0);

//   return [
//     countDown,
//     () => {
//       countDown.value = duration;
//       intervalTimer = setInterval(() => {
//         if (countDown.value > 0) {
//           countDown.value -= 1;
//         } else {
//           clearInterval(intervalTimer);
//           countDown.value = 0;
//         }
//       }, 1000);
//     },
//   ];
// };
// // 唤起登录
// export const login = () => {
//   store.commit('user/setLoginType', true);
// };
// // 去官网
// export const goshopdora = () => {
//   window.open('https://shopdora.cn', '_blank');
// };
// /**
//  * 商品获取数据
//  * productList --- 复制字段
//  * newValue (array) --- 1、shopee数据 2、库内基础数据  3、库内详情数据
//  */
// export const productInfo = (productList, newValue, exChangeRate, site) => {
//   productList.brand = productBrand(newValue[0]?.brand, newValue[1]?.brand);
//   productList.name = newValue[0]?.name ?? null;
//   productList.image = newValue[0]?.image ?? null;
//   productList.ctime = productTime(newValue[0]?.ctime, newValue[1]?.shelfTime);
//   productList.ctimeDay = productTimeDay(newValue[0]?.ctime, newValue[1]?.shelfTime);
//   productList.cateName = newValue[1]?.cateName ?? null;
//   productList.cateChPath = newValue[1]?.cateChPath ?? null;
//   productList.cateLocalPath = newValue[1]?.cateLocalPath ?? null;
//   productList.salestMRank = newValue[1]?.salestMRank ?? null;
//   productList.username = newValue[1]?.username ?? null;
//   productList.sellerSourceTips =
//     newValue[1]?.sellerSource || newValue[1]?.sellerSource == 0
//       ? ['不限', '本土', '跨境'][newValue[1].sellerSource]
//       : null;
//   productList.sales30Day = newValue[0]?.sold ?? newValue[2]?.sales30Day;
//   productList.sales1Day = newValue[2]?.sales1Day ?? productList.sales30Day === 0 ? 0 : null;
//   productList.sales7Day = newValue[2]?.sales7Day ?? productList.sales30Day === 0 ? 0 : null;
//   productList.sales = newValue[0]?.historical_sold ?? newValue[2]?.sales;
//   productList.salesGrowthRateM = productSalesRateD30(newValue[2]?.salesGrowthRateM);
//   productList.cateId = newValue[1]?.cateId ?? null;
//   productList.price = newValue[0]?.price ? (newValue[0]?.price / 100000).toFixed(2) : null;
//   productList.price_cny = newValue[0]?.price ? (newValue[0]?.price / 100000 / exChangeRate[site]).toFixed(2) : null;
//   productList.price_max = newValue[0]?.price_max ? (newValue[0]?.price_max / 100000).toFixed(2) : null;
//   productList.price_max_cny = newValue[0]?.price_max
//     ? (newValue[0]?.price_max / 100000 / exChangeRate[site]).toFixed(2)
//     : null;
//   productList.price_min = newValue[0]?.price_min ? (newValue[0]?.price_min / 100000).toFixed(2) : null;
//   productList.price_min_cny = newValue[0]?.price_min
//     ? (newValue[0]?.price_min / 100000 / exChangeRate[site]).toFixed(2)
//     : null;
//   productList.salesAmount30Day = `$${(productList.sales30Day * productList.price).toFixed(2)}`;
//   productList.salesAmount30DayUnit = `¥${(productList.sales30Day * productList.price_cny).toFixed(2)}`;
//   productList.salesAmount = `$${(productList.sales * productList.price).toFixed(2)}`;
//   productList.salesAmountUnit = `¥${(productList.sales * productList.price_cny).toFixed(2)}`;
// };

// // 商品字段
// export const initData = (itemid) => ({
//   // 商品id
//   itemId: itemid,
//   // 产品名称
//   name: null,
//   // 产品封面图片
//   image: null,
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
//   // 店铺类型归类
//   sellerSourceTips: null,
//   // 品牌
//   brand: null,
//   // 搜索类目
//   cateLocalPath: null,
//   // 类目id
//   cateId: null,
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
