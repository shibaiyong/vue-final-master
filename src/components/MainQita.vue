<template>
	<div class="content">
		<div class="swiper-container banner">
    			<div class="swiper-wrapper" >
    				<div class="swiper-slide" v-for="banner in banners">
    					<img :src="banner" alt="" />
    				</div>
    			</div>
    			
    			 <div class="swiper-pagination"></div>
    	</div>
    	
    	<div class="menu">
    		<section v-for="x in 2" >
    			<img :src="menu.src" v-for="menu in main_menu"/>
    		</section>
    	</div>
    	
    	<div class="list">
    		<dl v-for="shop in main_shops">
    			<dt><img :src="shop.src" /></dt>
    			<dd>
    				<h6 v-text="shop.des"></h6>
    				<p>特别好吃，很好吃</p>
    				<span class="yellow">今夜达</span>
    				<div><span  class="price" v-text="'￥'+shop.price">￥34.2</span><span class="price_per">￥45</span> <span class="car" @click="addGood(shop)"></span></div>	
    			</dd>
    			
    		</dl>
    		
    	</div>
	</div>
</template>

<script>
	import axios from "axios";
	import {mapState,mapGetters,mapActions} from "vuex"
	export default {
		name:"main-qita",
		props:["sub"],
		swiper_qita:null,
		data:function(){
			return{
				banners:null,
				main_big:null,
				main_menu:null,
				main_shops:null
				
			}
		},
		methods:{
			...mapActions(["addGood"]),
			getData:function(type){
				var that=this;
				axios.get("./static/jsons/"+type+".json").then(function(res){
					that.banners=res.data.lunbo;
					
					that.main_menu=res.data.xiaotu
					that.main_shops=res.data.shops
					
				})
			}
		},
		mounted:function(){
			this.getData(this.sub);
			//console.log("mounted")
		},
		updated:function(){
			
			this.$options.swiper_qita=new Swiper(".banner",{
				loop:true,
				pagination: '.swiper-pagination',
				autoplay : 2000
				
	});
	this.$options.swiper_qita.reLoop()
		},
		
			
		
		watch:{
			sub:function(val){
				this.getData(val);
				this.$options.swiper_qita.destroy(true,true);
			}
		}
		
		}
		//<img src="//image.benlailife.com/static/images/buy_btn_04c5053d.png"/>
</script>

<style lang="scss" scoped>
*{padding: 0;margin: 0;}
div.content{width: 100%;font-size: 3vh;height: 85vh;overflow:auto;
.banner img,.main img.big_img{width: 100%;}
}
.menu section{width: 100%;display: flex;justify-content: center;
	img{width: 25%; height:10vh}
}
.list dl{width: 100%; display: flex;margin: 3vh 0;border-bottom:1px solid #aaa;
		dt img{width: 25vw; height: 25vw; margin-right: 5vw;};
		dd{flex: 1;
			p{font:2vh/4vh "微软雅黑";color: #aaa;};
			.yellow{padding:1px;border: 1px solid #ff9600; font-size:2vh;color:#ff9600;display:inline-block};
			div{margin-top:30px;height:7vh;
				.price{font: bold 3vh/4vh "微软雅黑";color: #FF9600;margin-right: 23px;}
				.price_per{font: 2vh/4vh "微软雅黑";color: #aaa; text-decoration: line-through;};
				.car{display: inline-block;width: 7vh;height: 7vh;background: url("//image.benlailife.com/static/images/buy_btn_04c5053d.png") no-repeat;background-position-y: 1vh;float: right; margin-right: 2vw;background-size: 5vh;}
			}
		}
}
	


</style>