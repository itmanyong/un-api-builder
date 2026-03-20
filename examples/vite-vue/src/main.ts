import { createApp, reactive, ref, shallowReactive, shallowReadonly, shallowRef,isReactive } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


console.log(ref());
console.log(shallowRef());
console.log(shallowReactive({}));
console.log(shallowReadonly({}));
console.log(reactive({}));
