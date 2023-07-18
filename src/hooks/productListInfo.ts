/*
 * @Author: xiaohe
 * @Date: 2023-06-07 11:10:56
 * @LastEditors: xiaohe xiaohe@moziapi.com
 * @LastEditTime: 2023-07-18 12:20:21
 * @FilePath: /chromeProductList/src/hooks/productListInfo.ts
 */
// /*
//  * @Author: xiaohe
//  * @Date: 2023-06-07 10:01:55
//  * @LastEditors: xiaohe xiaohe@moziapi.com
//  * @LastEditTime: 2023-06-07 16:07:06
//  * @FilePath: /chromeProductList/src/hooks/productListInfo.ts
//  */

// const dayYMD = (time: any) => {
//   let DD = String(time.getDate()).padStart(2, '0'); // 获取日
//   let MM = String(time.getMonth() + 1).padStart(2, '0'); //获取月份，1 月为 0
//   let yyyy = time.getFullYear(); // 获取年
//   return yyyy + '-' + MM + '-' + DD;
// };

// // shopee ----  shopee的数据
// // shopdora  ----   站内数据库的数据
// type T = string | number | null | undefined | any;
// // 品牌
// export function productBrand(shopee:T, shopdora:T) {
//   return shopdora ? (shopdora == '' ? '无' : shopdora) : shopee ? (shopee == '' ? '无' : shopee) : '空';
// };
// // 上架时间
// export function productTime(shopee:T, shopdora:T) {
//   return dayYMD(new Date((shopee ?? shopdora) * 1000))
// };
// export function productTimeDay(shopee:T, shopdora:T) {
//   return ((new Date().getTime() / 1000 - shopee ?? shopdora) / 60 / 60 / 24).toFixed(0);
// };
// // 近1日销量
// export function productSalesD1(shopee:T, shopdora:T) {
//   return shopee ? (shopee == '' ? '无' : shopee) : shopdora ? (shopdora == '' ? '无' : shopdora) : '空';
// };
// // 近7日销量
// export function productSalesD7(shopee:T, shopdora:T) {
//   return shopee ? (shopee == '' ? '无' : shopee) : shopdora ? (shopdora == '' ? '无' : shopdora) : '空';
// };
// // 近30日销量
// export function productSalesD30(shopee:T, shopdora:T) {
//   return shopee ? (shopee == '' ? '无' : shopee) : shopdora ? (shopdora == '' ? '无' : shopdora) : '空';
// };
// // 近30日销量增长率
// export function productSalesRateD30( shopdora:T) {
//   return shopdora ? `${shopdora >=0 ? '+' : ''}${(shopdora / 100).toFixed(2)}%` : null;
// };
// // 近30日销售额
// export function productSalesAmountD30(shopee:T, shopdora:T) {
//   return 
// };
// // 总销量
// export function productSales(shopee:T, shopdora:T) {
//   return shopee ? (shopee == '' ? '无' : shopee) : shopdora ? (shopdora == '' ? '无' : shopdora) : '空';
// };
// // 总销售额
// export function productSalesAmount(shopee:T, shopdora:T) {
//   return shopee ? (shopee == '' ? '无' : shopee) : shopdora ? (shopdora == '' ? '无' : shopdora) : '空';
// };

