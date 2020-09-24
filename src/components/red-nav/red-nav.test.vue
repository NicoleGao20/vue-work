<template>
  <div id="app">
    
    <h3>测试导航</h3>
    
    <RedNav></RedNav>
    <!-- <red-nav></red-nav> -->
    <!-- <red-nav bg-color="transparent" :border-width="0" arrow="gray"></red-nav> -->
    
    
  </div>
</template>

<script>
import RedNav from '../components/red-nav/red-nav.vue'
export default {
  name: 'App',
  data(){
    return {
      ipt:'bmw',
      ipt2:'k5',
    }
  },
  components: {
    RedNav
  },
  methods:{
    show(ev){
      console.log(ev)
    }
  }
}
</script>

<style>

</style>
