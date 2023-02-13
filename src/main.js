import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import * as ElIconModules from '@element-plus/icons'
import "./assets/fonts/iconfont.css"
import 'swiper/swiper-bundle.css';
let app = createApp(App);




// 统一注册Icon图标
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName]
    app.component(iconName, item)
  }
}



// app.use(router).use(ElementPlus).mount('#app')
app.use(store).use(router).use(ElementPlus).mount('#app')
