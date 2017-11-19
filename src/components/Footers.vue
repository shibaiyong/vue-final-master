<template>
  <div class="foo">
  	<router-link to="/hello">
		<img src="../assets/shouye.png" />
			首页
		</router-link>
		<router-link to="/fenlei" class="cclor">
			<img src="../assets/fenlei.png" />
			分类
		</router-link>
		<router-link to="/chongzhi">
			<img src="../assets/chongzhi.png" />
			充值赠礼
		</router-link>
		<router-link to="/car" class="car">
		<img src="../assets/gwc.png" />
		<em v-if="isShow" v-text="allnumber"></em>
			购物车
		</router-link>
		<router-link to="/mine">
		<img src="../assets/mine.png" />
			我的本来
		</router-link>
  </div>
</template>

<script>

import Vue from 'vue'
import {mapGetters} from "vuex"
	const Footers = Vue.extend({
		name:'footers',
		computed:{
			...mapGetters(["allnumber"])
		},
		methods:{
				changeShow:function(){
					if(this.allnumber>0) this.isShow=true
				else this.isShow=false
			}
		},
		watch:{
			allnumber:function(val){
				if(val>0) this.isShow=true
				else this.isShow=false
			}
		},
		mounted:function(){
				this.changeShow();
		},
		data(){
			return {
				isShow:false
			}
		}
	})
	Vue.component('foo-nav',Footers)
	export default Footers
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.foo{
		position: fixed;
		bottom: 0;left: 0;width: 100%;
	    background-color: #fff;
	    height: 3rem;
	    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
	    display: flex;
	    
	    a{
	    	flex-grow: 1;
	    	display: flex;
	    	flex-flow: column;
	    	align-items: center;
	    	justify-content: space-around;
	    	font-size: .3rem;
	    	color: #777;
	    	img{
	    		width: 24px;
	    		height: 24px;
	    	}
	    
	    }
	    .cclor{
	    	color: #abd13e;
	    }
	    .car{
	    	position: relative;
	    	em{
						display: inline-block;
						position: absolute;
						width: 17px;
						height: 17px;
						background: #ff9600;
						border-radius: 50%;
						text-align: center;
						line-height: 17px;
						font-style: normal;
						color: #fff;
						right: 0;
						top:0;
						font-size: 12px;
					}
	    }
	    
	}
</style>
