<template>
	<div class="content">
		<div class="swiper-container banner_m">
    			<div class="swiper-wrapper" >
    				<div class="swiper-slide" v-for="banner in banners">
    					<img :src="banner" alt="" />
    				</div>
    			</div>
    			
    			 <div class="swiper-pagination"></div>
    	</div>
    	<div class="main">
    		<img :src="img" alt="" v-for="img in main_big" class="big_img"/>
    		<section v-for="x in 3">
    			<img :src="middle" alt=""  v-for="middle in main_middle[x-1]" />
    		</section>
    		<div class="heng"><img src="//image3.benlailife.com/AppHomePageImage/d83ebae12cc840b9ad7058177a73e06b_n-n.jpg?imageView2/2/w/625/format/webp" alt="" /></div>
    	</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name:"main-content",
		props:["sub"],
		swiper_con:null,
		data:function(){
			return{
				banners:null,
				
				main_big:null,
				main_middle:[[],[],[]]
				
			}
		},
		methods:{
			getData:function(){
				var that=this;
				axios.get("./static/jsons/tuijian.json").then(function(res){
					that.banners=res.data.lunbo;
					that.main_big=res.data.main_big;
					for(var i=0;i<res.data.main_middle.length;i++){
						
						that.main_middle[parseInt(i/3)].push(res.data.main_middle[i])
					}
					
					
				})
			}
		},
		created:function(){
		
		},
		mounted:function(){
			this.getData()
			
		},
		updated:function(){
			this.$options.swiper_con=new Swiper(".banner_m",{
				loop:true,
				pagination: '.swiper-pagination',
				autoplay : 2000
				
  	});
  	this.$options.swiper_con.reLoop();
  	
		}
		
	}
</script>

<style lang="scss" scoped>

div.content{width: 100%;background: #eee;font-size: 3vh;height: 85vh;overflow:auto;
.banner_m img,.main img.big_img{width: 100%;}
}
.main section{display: flex;width: 100%;overflow: hidden;margin: 1vh 0;
	img{width:33%;height:25vh}
	
}
.heng img{width:100%}
</style>