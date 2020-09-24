<template>
  <div id="app">
	<loading v-show="$root.bLoading"/>
	<router-view/>
	<Footer v-show="$root.bFoot"/>
    <!-- <RedNav/> -->
	<!-- <RedList 
	  v-for="(item,index) of list"
	  :data="item"
	  :key="item._id"
	  
	
	/> -->
	
  </div>
</template>

<script>
import loading from '../components/loading.vue'
import Footer  from './Footer.vue'

// import RedList from '../components/red-list/red-list.vue'
export default {
  name: 'App',
  data(){
    return {
		
		
    }
	
  },

 mounted() {
 },
  
  components: {
     loading,Footer
	 // RedList
  },
  methods:{
  },
  watch:{
    $route:{
      handler(newVal){
        let path = newVal.path;
        if(/home|user|detail/.test(path)){
          this.$root.bFoot=true;
        }
        if(/login|reg/.test(path)){
          this.$root.bFoot=false;
        }
      },
      immediate:true
    }
  },
  
}
</script>

<style>

</style>

