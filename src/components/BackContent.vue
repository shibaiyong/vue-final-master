
<template>
<div class="shopShow">
	  		<h3>商品分类</h3>
	  		<ul>
	  			<li v-for="good in searchcontent">
	  				<a :href="'https://www.baidu.com/s?ie=utf-8&wd='+good" target="_blank">
	  				{{good}}
	  				</a>
	  			</li>
	  		</ul>
</div>
</template>

<script>
import {mapState} from "vuex"
export default {
  	name:"backsearch",
  	data:function(){
  		return {
  			getgood:[]
  		}
  	},
  	computed:{
  		...mapState(['searchcontent'])
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 	.shopShow{
 		background: #F2F2F2;height: 616px;
 		h3{font-size: 15px;padding: 10px;font-family: "黑体";
 		color:#ccc}
 		ul{
 			li{
 				margin: 10px 0;background: white;
 				padding: 10px 10px;
 			}
 		}
 	}
</style>

