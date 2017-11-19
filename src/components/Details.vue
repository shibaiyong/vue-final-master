<template>
	<div class="datail">
		<header>
			<img src="../assets/jiantou.png" @click="toOne()"  />
			
		</header>
  		<div class="shoplist" v-for="shop in arr"  >
				
	<div class="swiper-container">
        <div class="swiper-wrapper">
        	  <div class="swiper-slide"> <img :src="shop.src" /></div>
        	  <div class="swiper-slide"> <img :src="shop.src" /></div>
        	  <div class="swiper-slide"> <img :src="shop.src" /></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
     
    
    </div>
				
				
				<p>{{shop.des}}</p>
				<p class="word">全产业链，严守五道安全关，安全新鲜美味</p>
				<p class="price">￥{{shop.price}}</p>
 		</div>
 		<div class="card">
 			<p>今夜达：北京市区（五环内，包括五环）用户在0:00-11:00下单，可选当日18:00-22:00送达。</p>
 			<p><b>包邮</b>北京市满60.00元包邮</p>
 			<hr />
 			<span class="jinye">今夜达</span>
 			<span class="jinye">全面质检</span>
 			<span class="jinye">资深买手</span>
 			<span class="jinye">全程冷链</span>
 		</div>
 		<footer>
 			<span class="car" @click="tocar"><b>购物车</b><em v-if="isShow">{{nums}}</em></span>
 			<span class="shou"><b>收藏</b></span>
 			<span class="kefu"><b>客服</b></span>
 			<span v-for="shop in arr" @click="change">
 					<span class="jiaru" @click="addGood(shop)" >加入购物车</span>
 				
 			</span>
 		
 			
 		</footer>
  </div>
</template>

<script>
	import {mapState,mapGetter,mapActions} from "vuex"
		import { Toast } from 'mint-ui'

	import axios from  'axios'
	export default {
  name: 'datails',
   swiper:null,
  data () {
    return {
     shop:null,
     num:null,
     nums:null,
     isShow:false,
     arr:[]
    
     
    }
  },
  methods:{
  
  		getShop(){
  		axios.get('./static/jsons/shops.json').then(function(date){
  				
							var data=date.data[this.num][0]
							var data1=date.data[this.num][1]
							var data2=date.data[this.num][2]
							for(var i=0;i<data.length;i++){
								if(this.shop==data[i].id){
									this.arr.push(data[i])
								}
							}
							for(var i=0;i<data1.length;i++){
								if(this.shop==data1[i].id){
									this.arr.push(data1[i])
								}
							}
							for(var i=0;i<data2.length;i++){
								if(this.shop==data2[i].id){
									this.arr.push(data2[i])
								}
							}
	  				//console.log(this.arr)
	  					}.bind(this))
  				},
  		getSwiper(){
  			  	this.$options.swiper = new Swiper('.swiper-container', {
				        pagination: '.swiper-pagination',
				        slidesPerView: 1,
				        paginationClickable: true,
				        spaceBetween: 30,
				        loop: true
    			})
  		},
  		toOne(){
  			window.location.hash="/fenlei"
  		},
  		tocar(){
  			window.location.hash="/car"
  		},
  		change(){
  				Toast({
  					message:"加入购物车成功!",
  					duration:1000,
  					iconClass: 'iconfont icon-chenggong-copy'
				})
  			var that=this
  			setTimeout(function(){
  				that.nums++
  				if(that.nums>0){
  				that.isShow=true
  			}
  			}
  			,1100)
  			
  			
  			//console.log(this.nums)
  		},
  		...mapActions(["addGood"])
  },
  mounted(){
 
  	this.shop=this.$route.params.shop
  	this.num=this.$route.params.num
  	
  	this.getShop()
  	this.getSwiper()

  	
  },
   watch:{
  	arr(val){
  		var that = this
  		setTimeout(()=>{
  				that.getSwiper()
  		},0)
  		
  	}
  }
}
</script>

<style scoped lang="scss">
header{
	width: 100%;
	height: 45px;
	background-color: #FFFFFF;
	position: fixed;
	border-bottom: 1px solid #F2F2F2;
	top:0;
	z-index: 999;
	img{
		height: 30px;
		margin-top:7px;
		
	}
	
}
.detail{
	width: 100%;
	height: 100%;
	
}
.shoplist{
		width: 100%;
		height: 100%;
		margin-top: 45px;
		p{
			padding: 5px 10px;
		}
		img{
			width: 100%;
			height: 375px;
		}
		.word{
			color: #999;
		}
		.price{
			color:#ff9600;
			font-size: 17px;
		}
	}
.card{
	padding: 0 10px;
	background-color: #FFFFFF;
	border-top: 23px solid #F2F2F2;
	color: #444;
	font-size: 12px;
	
	border-bottom: 20px solid #F2F2F2;
	margin-bottom: 50px;
	b{
		margin-right: 7px;
		font-size: 14px;
	}
	p{
		margin: 5px 0;
		line-height: 17px;
	}
	.jinye{
		display: inline-block;
		width: 70px;
		height: 25px;
		line-height: 25px;
		text-align: right;
		background: url(../assets/jin.png) no-repeat;
		background-position: 0 -28px;
		background-size: 17px;
		margin-right: 10px;
	}
}
footer{
	width: 100%;
	height: 50px;
	position: fixed;
	bottom: 0;
	background-color: #FFFFFF;
	span{
		display: inline-block;
		position: relative;
	
		b{
			position: absolute;
			bottom: 2px;
			right: 11px;
		}
	}
	.car,.shou,.kefu{
		width: 60px;
		height: 50px;
		background-color: #FFFFFF;
		border: 1px solid #F2F2F2;
		background:url(../assets/goods.png) no-repeat;
		background-position:10px 5px ;
		background-size: 30px;
		text-align: center;
		font-size: 12px;
		color: #666;
	}
	.car{
		
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
			right: 10px;
			top:2px;
			font-size: 12px;
		}
	}
	.shou,.kefu{
		background:url(../assets/goods.png) no-repeat;
		background-size: 30px;
		background-position:center -55px ;
		b{
			right: 16px;
		}
	}
	.kefu{
		background-position:center -177px ;
	}
	.jiaru{
		width: 180px;
		height: 50px;
		background-color: #ff9600;
		color: #FFFFFF;
		text-align: center;
		line-height: 50px;
		bottom: 20px;
	}
}

</style>