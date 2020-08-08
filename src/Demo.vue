<template>
  <div class="red">
    cathy's demo
  </div>
</template>

<script>
export default {
  el:'#app',
  data(){
    return{
      n:0
    }
  },
  methods:{
    add(){
      this.n += 1
    }
  }
}
</script>

<style scoped>
.red{
  color: red;
}
</style>