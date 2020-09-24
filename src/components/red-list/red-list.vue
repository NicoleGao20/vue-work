<template>
	<div class="item" >
	    <div class="item-t">
	            <img :src="data.detail.auth_icon" alt="">
	            <div class="info">
	                <h2>网红{{data.detail.auth}}签约{{data.date1|fillzero}}:{{data.date2|fillzero}}分签约某平台</h2>
	                <p>签约时间： {{data.date1|fillzero}}:{{data.date2|fillzero}}</p>
	                <p>单次盈利：{{data.bai1|currency}}%-{{data.bai2|currency}}%</p>
	            </div>
	    </div>
	    <div class="btn">
	        {{text}}
	    </div>
	</div>
</template>

<script>
	export default{
		name:'res-list',
		data(){
			return {
			}
		},
		props:{
			data:{
				type:Object,
				required:true
			},
			text:{
			   type:String,
				default:'待付款'
			}
		}
	}
</script>

<style scoped>
	.item {
	  overflow: hidden;
	  width: 9.146667rem;
	  margin: 0.426667rem auto;
	  background: #fff;
	  height: 3.52rem;
	  border-radius: 0.16rem;
	}
	.item .item-t {
	  box-sizing: border-box;
	  padding: 0.346667rem;
	  overflow: hidden;
	}
	.item .item-t img {
	  width: 1.813333rem;
	  height: 1.813333rem;
	  float: left;
	  margin-right: 0.28rem;
	}
	.item .item-t .info {
	  float: left;
	  height: 1.813333rem;
	}
	.item .item-t .info h2 {
	  font-size: 0.4rem;
	  font-family: PingFang SC;
	  font-weight: 500;
	  color: #333333;
	}
	 .item .item-t .info p {
	  font-size: 0.346667rem;
	  font-family: PingFang SC;
	  font-weight: 400;
	  color: #999999;
	  margin-top: 0.266667rem;
	}
	.item .btn {
	  background: #e8c756;
	  border-radius: 0.386667rem;
	  text-align: center;
	  width: 2.133333rem;
	  float: right;
	  margin-right: 0.4rem;
	  height: 0.773333rem;
	  line-height: 0.773333rem;
	  font-size: 0.346667rem;
	  font-family: PingFang SC;
	  font-weight: 500;
	  color: #333333;
	  margin-bottom: 0.133333rem;
	}
	 .item .shipment {
	  background: #fff;
	  border: 1px solid #ccc;
	}
</style>
