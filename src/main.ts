/*
 * @Author: xiaohe
 * @Date: 2023-06-07 10:54:51
 * @LastEditors: xiaohe xiaohe@moziapi.com
 * @LastEditTime: 2023-06-07 12:18:39
 * @FilePath: /chromeProductList/src/main.ts
 */
import { createApp } from 'vue'
import './style.css'
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import App from './App.vue'

const app = createApp(App);

app.use(TDesign);
app.mount('#app');
