<template>
  <div class="mine">
  	<div class="zz"></div>
  	<header>
  	<span v-text="_Position"></span>
  	<div>
  		
  		<input type="text" placeholder="麻辣小龙虾第2件半价" />
  		<a href="#"><img src="//image.benlailife.com/static/images/mycenter/login_n_ico05_0e143fe9.png"></a>
  	</div>
  	</header>
  	<div class="list-box">
  		<div class="list-left">
  			<a @click="change('镇店之宝','zhendian')" :class="{active:active=='镇店之宝'?true:false}" :names="{active}"><span :class="{active:active=='镇店之宝'?true:false}">镇店之宝</span></a>
  			<a @click="change('水果','shuiguo')" :class="{active:active=='水果'?true:false}" :names="{active}" ><span :class="{active:active=='水果'?true:false}">水果</span></a>
  			<a @click="change('蔬菜','shucai')" :class="{active:active=='蔬菜'?true:false}" :names="{active}" ><span :class="{active:active=='蔬菜'?true:false}">蔬菜</span></a>
  			<a @click="change('肉禽蛋品','danpin')" :class="{active:active=='肉禽蛋品'?true:false}" :names="{active}" ><span :class="{active:active=='肉禽蛋品'?true:false}">肉禽蛋品</span></a>
  			<a @click="change('水产海鲜','haixian')" :class="{active:active=='水产海鲜'?true:false}" :names="{active}" ><span :class="{active:active=='水产海鲜'?true:false}">水产海鲜</span></a>
  			<a @click="change('熟食面点','miandian')" :class="{active:active=='熟食面点'?true:false}" :names="{active}" ><span :class="{active:active=='熟食面点'?true:false}">熟食面点</span></a>
  			<a @click="change('粮油副食','fushi')" :class="{active:active=='粮油副食'?true:false}" :names="{active}" ><span :class="{active:active=='粮油副食'?true:false}">粮油副食</span></a>
  			<a @click="change('烘焙乳品','rupin')" :class="{active:active=='烘焙乳品'?true:false}" :names="{active}" ><span :class="{active:active=='烘焙乳品'?true:false}">烘焙乳品</span></a>
  			<a @click="change('休闲食品','shipin')" :class="{active:active=='休闲食品'?true:false}" :names="{active}" ><span :class="{active:active=='休闲食品'?true:false}">休闲食品</span></a>
  			<a @click="change('酒水茶饮','chayin')" :class="{active:active=='酒水茶饮'?true:false}" :names="{active}" ><span :class="{active:active=='酒水茶饮'?true:false}">酒水茶饮</span></a>
  			<a @click="change('厨房用品','yongpin')" :class="{active:active=='厨房用品'?true:false}" :names="{active}" ><span :class="{active:active=='厨房用品'?true:false}">厨房用品</span></a>
  			
  		</div>
  		<class-right :active='active' :num='num'></class-right>
  	</div>
  	<foo-nav></foo-nav>
  </div>
</template>

<script>
import Classright from './ClassComponents/Classright'
import Footers from './Footers'
import {mapGetters} from "vuex"
export default {
  name: 'classify',
  data () {
  	
    return {
    	active:'镇店之宝',
    	num:'zhendian'
    }
  },
  computed:{
  	...mapGetters(["_Position"])
  },
  methods:{
  	
  	change(data,i){
  		this.active=data
  		this.num=i
  	//console.log(this.active)
  	}
  },
  components:{
  	'class-right':Classright
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .mine{
 	width: 100%;
 	height: 100%;
 	.zz{
 		width: 100%;
 		height: 50px;
 	}
 
 		header{
 			width: 100%;
 			display:flex;
 			position: fixed;
 			z-index: 999;
 			background-color: #FFFFFF;
 			top:0;
 			
 		
 			
 			span{
 				margin: 0.5rem;
		 			display: inline-block;
		 			padding: 0.5rem 1rem;
		 		
		 		}
		 	div{
		 		margin: 1rem;
		 		border-radius: 1.5rem;
		 		border: 1px solid #e1e1e1;
		 		flex: 1;
		 		
		 		input{
		 			border: none;
		 			position: relative;
		 			left: 3rem;
		 			
		 			outline: none;
		 			height:2.5rem
		 		}
		 		a{
		 			img{
		 				width: 15px;
		 				height: 15px;
		 				float: right;
		 				position: relative;
		 				top:0.5rem;
		 				right: 0.5rem;
		 			}
		 		}
		 	}
 		}
 		.list-box{
 			width: 100%;
 			height: 100%;
 		}
	.list-left{
		float: left;
		width: 5.6rem;
		position: fixed;
		left: 0;
		a{
			display: inline-block;
			padding: 0.4rem 0;
			border-bottom: 1px solid #F5F5F5;
		
		}
		span{
			display: inline-block;
			margin: 0.7rem 0;
			padding: 0 0.5rem;
			border-left: 2px solid #fff;
			width: 100px;
			text-align: center;
		}
	}
 	span.active{
 			border-left: 3px solid #ABD13E;
 			color: #ABD13E;
 	}
 	a.active{
 		background-color: #f2f2f2;
 	}
 	
 			
 		
 	}
</style>
