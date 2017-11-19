<template>
	<div>
		<div class="swiper-container main-nav">
    			<div class="swiper-wrapper">
    				
    				<router-link to="/tuijian" class="swiper-slide" ><span :class="{active:active=='tuijian'?true:false}" @click="changeActive('tuijian')">推荐</span></router-link>
    				
    				<router-link to="/qita"  class="swiper-slide" ><span @click="changeActive('shuiguo')" :class="{active:active=='shuiguo'?true:false}">水果</span></router-link>
    				
    				<router-link to="/qita" class="swiper-slide" ><span @click="changeActive('rouqin')" :class="{active:active=='rouqin'?true:false}">肉禽</span></router-link>
    				<router-link to="/qita" class="swiper-slide" ><span @click="changeActive('shuichan')" :class="{active:active=='shuichan'?true:false}">水产</span></router-link>
    				<router-link to="/qita" class="swiper-slide" ><span @click="changeActive('shucai')" :class="{active:active=='shucai'?true:false}">蔬菜</span></router-link>
    				<router-link to="/qita" class="swiper-slide" ><span @click="changeActive('shushi')" :class="{active:active=='shushi'?true:false}">熟食</span></router-link>
    				<router-link to="/qita" class="swiper-slide" ><span @click="changeActive('liangyou')" :class="{active:active=='liangyou'?true:false}">粮油</span></router-link>
    				<router-link to="/qita" class="swiper-slide" ><span @click="changeActive('rupin')" :class="{active:active=='rupin'?true:false}">乳品</span></router-link>
    				<router-link to="/qita" class="swiper-slide" ><span @click="changeActive('changyin')" :class="{active:active=='changyin'?true:false}">畅饮</span></router-link >
    				<router-link to="/qita" class="swiper-slide" ><span @click="changeActive('lingshi')" :class="{active:active=='lingshi'?true:false}">零食</span></router-link>
    				<router-link to="/qita" class="swiper-slide" ><span @click="changeActive('chuju')" :class="{active:active=='chuju'?true:false}">厨具</span></router-link>
    			</div>
    		</div>
    		<router-view :sub="active"></router-view>
	</div>
</template>

<script>
	import MainContent from "./MainContent"
	import MainQita from "./MainQita"
	export default {
		name:"main-nav",
		swiper:null,
		data(){
			return{
			active:"tuijian",
			type:"tuijian"
			}
			
		},
		mounted(){
			this.$options.swiper=new Swiper(".main-nav",{
		  slidesPerView : 'auto' 
  	})
		},
		methods:{
			
			changeActive(val){
				this.active=val
			}
		},
		components:{
			"tuijian":MainContent,
			"qita":MainQita
		},
		watch:{
			active:function(val){
				if(val!="tuijian"){
					this.type="qita"
				}
			}
		}
	}
	
	
</script>

<style lang="scss" scoped>
.main-nav{width: 100%; height: 5vh; 
.swiper-slide{width: auto;padding: 0 4vw;color: #666;
	font-size:2.2vh;line-height: 5vh; text-decoration: none;

}
.active{color:#abd13e}

}

</style>