//整個項目的入口文件

//引入Vue
import Vue from 'vue'
//引入App組件，他是所有組件的父組件
import App from './App.vue'
//關閉Vue的生產提示
Vue.config.productionTip = false

//創建Vue實例對象---vm
new Vue({
  render: h => h(App),
}).$mount('#app')
