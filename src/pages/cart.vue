<template>
		<div class="myorder" >
		    <div class="header">
		        <span><i class="layui-icon layui-icon-left"></i></span>
		        <span>我的订单</span>
		        <span></span>
		    </div>
		    <div class="menu">
		       <ul>
				<!-- <router-link to="/cart"> -->
					<van-tabs v-model="active">
					   <van-tab title="全部">
						 <div class="main">
							<RedList 
								v-for="(item,index) of list"
								:data="item"
								:key="item._id"
								text="待发货"
							/>
						  </div>
					  </van-tab>
				  <!-- </router-link> -->
				  
				  <van-tab title="待付款">
					  <div class="main">
					   	<RedList 
					   		v-for="(item,index) of list"
					   		:data="item"
					   		:key="item._id"
					   		text="待发货"
					   	/>
					   </div>
				  </van-tab>
				  <van-tab title="待发货">
					  <div class="main">
					   	<RedList 
					   		v-for="(item,index) of list"
					   		:data="item"
					   		:key="item._id"
					   		text="待发货"
					   	/>
					   </div>
				  </van-tab>
				  <van-tab title="待收货">
					  <div class="main">
					   	<RedList 
					   		v-for="(item,index) of list"
					   		:data="item"
					   		:key="item._id"
					   		text="待发货"
					   	/>
					   </div>
				  </van-tab>
				  <van-tab title="已完成">
					  <div class="main">
					   	<RedList 
					   		v-for="(item,index) of list"
					   		:data="item"
					   		:key="item._id"
					   		text="待发货"
					   	/>
					   </div>
				  </van-tab>
				</van-tabs>  
				  
				  <!-- <router-link tag="li" class="all" active-class="active" to="/cart">全部</router-link>
				   <router-link tag="li" class="shoukuan" active-class="active" to="/cart">待付款</router-link>
				   <router-link tag="li" class="fahuo" active-class="active" to="/cart">待发货</router-link>
				   <router-link tag="li" class="shouhuo" active-class="active" to="/cart">待收货</router-link>
				   <router-link tag="li" class="end" active-class="active" to="/cart">已完成</router-link> -->
		          
				   <!-- <li class="active">全部</li>
		           <li>待付款</li>
		           <li>待发货</li>
		           <li>待收货</li>
		           <li>已完成</li> -->
		       </ul>
		   </div>
		    <!-- <div class="main">
				<RedList 
					v-for="(item,index) of list"
					:data="item"
					:key="item._id"
					text="待发货"
				/>
			</div> -->
		</div>
	
</template>

<script>
	import FrameScreen from '../components/frame-screen.vue'
	import RedList from '../components/red-list/red-list.vue'
	export default{
		name:'cart',
		data(){
			return{
				list:[],
				active:2
			}
		},
		mounted() {
			this.$axios({
				url:'/api/home',
				params:{_limit:8,_page:1}
			}).then(res=>{
				this.list=res.data.data
			})
		},
		components:{
			RedList,FrameScreen
		}
	}
</script>

<style scoped>
	.myorder .header {
	  box-sizing: border-box;
	  padding: 0.44rem;
	  display: flex;
	  height: 1.173333rem;
	  justify-content: space-between;
	  align-items: center;
	  font-size: 0.426667rem;
	  font-family: PingFang SC;
	  font-weight: 500;
	  color: #222222;
	  border-bottom: 1px solid #eee;
	}
	.myorder .menu {
	  box-sizing: border-box;
	  padding-left: 0.44rem;
	  padding-right: 0.44rem;
	}
	.myorder .menu ul {
	  display: flex;
	  justify-content: space-around;
	  align-items: center;
	  height: 1.173333rem;
	}
	.myorder .menu ul .active {
	  height: 1.173333rem;
	  font-size: 0.373333rem;
	  line-height: 1.173333rem;
	  font-family: PingFang SC;
	  font-weight: 400;
	  color: #333333;
	}
	.myorder .menu ul .all.active {
	  color: #d8b746;
	  border-bottom: 1px solid #d8b746;
	}
	
	/* .myorder .menu ul .shoukuan.active {
	  color: #d8b746;
	  border-bottom: 1px solid #d8b746;
	} */
	.myorder .main {
	  background: #F6F4F9;
	  overflow: hidden;
	  background: #F6F4F9;
	}
	.van-tabs.van-tabs--line{
		position: absolute;
		/* left: 0rem; */
		top: 1.5rem;
		width: 100%;
		/* font-size: 14px; */
	}
	.van-tab__text.van-tab__text--ellipsis{
		/* margin:0 0.5rem !important */
	}
	
</style>
