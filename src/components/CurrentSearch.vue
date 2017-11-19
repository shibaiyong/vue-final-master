
<template>
		<div>
			<h3>热门搜索</h3>
			<ul>
				<li><span>佳沛奇异果</span><span>车厘子</span><span>泰国山竹</span></li>
				<li><span>新西兰空运直达鲜奶</span><span>厄瓜多尔白虾</span><span>澳洲牛腩</span></li>
				<li><span>李玉双大米</span><span>雅江松茸</span><span>阳澄湖鲜活六月黄</span></li>
			</ul>
			<hr/>
			<h3>搜索记录</h3>
			<div class="record">
				<p v-for="history in searchhistory">{{history}}</p>
			</div>
			</div>
		</div>
</template>

<script>
	import {mapState} from "vuex"
export default {
	name:"CurrentSearch",
  data:function(){
  	return {
  		msg:"this is CUrentsearch"
  	}
  },
  computed:{
  	...mapState(['searchhistory'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	h3{font-size: 15px;padding: 10px;font-family: "黑体";
 		color:#ccc}
 		ul{
 			font-family: "黑体";
 			li{
 				span{
 					padding: 3px 8px;margin: 5px;border: 1px #ccc solid;
 					display: inline-block;font-size: 12px;color:#444
 				}
 			}
 		}
	.record{
		overflow: hidden;
		p{
			float:left;padding: 3px 8px;margin: 5px;border: 1px #ccc solid;
 					display: inline-block;font-size: 12px;color:#444
		}
	}
</style>
