import Vue from 'vue'
import App from './App'

import DemoBlock from '@/components/demo-block.vue';
Vue.component('demo-block', DemoBlock);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
