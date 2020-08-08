
const Vue = window.Vue
console.log(Vue);
Vue.config.productionTip = false

import Demo from './Demo.vue'

console.log(`here`);
Vue.component('demo2',{
    template:`
    <div>11112</div>
    `
})
console.log(`demo`);
console.log(Demo);

new Vue({
    components:{
        Frank: Demo
    },
    data() {
        return {
            n: 0,
            array: [1, 2, 3, 4, 5, 6, 7, 8]
        }
    },
    template: `
      <div class="red">
      {{n}}
      <button @click="add">+1</button>
      <Frank/>
      <hr>
      {{ filter()}}   
      </div>`,
    methods: {
        add() {
            this.n += 1
        },
        filter() {
            console.log(`did filter`);
            return this.array.filter(i => i % 2 === 0)
        }
    }

})
