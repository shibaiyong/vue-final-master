<template>
  <div class="shop-car">
    	<header>
    			<img src="../assets/top_back.png" alt="" @click="to('hello')"/>
    			<h3>购物车</h3>
    			<p @click="showDelet">编辑</p>
    	</header>

    	<section>
    		<add-carlist :showdelet="btndelet" :isallchoose="ischoose" @tell-farther="changeIschoose" @change-money="allmoney"></add-carlist>
    		
    		<div class="goodcontainer">
    			<p><span class="line">————</span><img src="../assets/excellent.png"><span>优惠推荐</span><span class="line">————</span></p>
    			<div class="everygood" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
    				<ul v-for="good in goodlist">
    					<li><img :src="good.src"/></li>
    					<li>{{good.des}}</li>
    					<li>{{good.feature}}</li>
    					<li>¥{{good.price}}<img @click="addGood(good)" src="../assets/shopcar.png"></li>
    				</ul>
    			</div>
    		</div>
    	</section>

 		<footer>
    		<div class="choosebox">
    			<a @click="changeStyle" :class="[ischoose?'choose':'']" href="javascript:;"></a>
    			<span>全选</span>
    		</div>
    		<p><span>合计：</span><span class="price">￥{{summoney}}</span></p>
    		
    		<ul>
    			<li>去结算</li>
    			<li class="fee">(运费{{fee}}元)</li>
    		</ul>
    	</footer>
  </div>
</template>

<script>
	import {mapState,mapGetter,mapActions} from "vuex"
	import Vue from 'vue'
	import axios from  'axios'
	import { InfiniteScroll } from 'mint-ui'
	Vue.use(InfiniteScroll);
	import addCarList from "./addCarList"

export default {
  name: 'shopcar',
  data () {
    return {
      goodlist: [],
      loading:false,
      ischoose:false,
      summoney:0,
      fee:20,
      btndelet:false
    }
  },
  methods:{
  	loadMore(){
  		var that=this;
  		axios.get("./static/shopCarImage.json"
  	).then((res)=>{
  			var data=res.data;
  			//直接给数组赋值是不对的要循环push进去
  			data.forEach(function(item,index){
  				that.goodlist.push(item)
  			})
  		})
  	},
  	changeStyle(){
  		this.ischoose=!this.ischoose
  	},
  	changeIschoose(_ischoose){
  		this.ischoose=_ischoose
  	},
  	allmoney(money){
  		this.summoney=money.toFixed(1)
  	},
  	...mapActions(["addGood"]),
  	to(where){
  		window.location.hash="/"+where
  	},
  	showDelet(){
  		this.btndelet=!this.btndelet
  	}
  	
  },
  watch:{
  	summoney:function(){
  		if(this.summoney>=300){
  			this.fee=0
  		}else{
  			this.fee=20
  		}
  	}
  },
  components:{
  	"add-carlist":addCarList
  }
}

</script>

<style lang="scss" scoped>
			.shop-car{
				font-size:12px;
				height: 100%;
				background:#f2f2f2;
			}
			header {
				display:flex;justify-content: space-between;align-items: center;
				padding:0 10px;height: 44px;background:white;border-bottom: 
				1px solid #ccc;
				img{width: 12px;height: 20px;}
				h3{font-size: 16px;color:#b8d75a}
				p{color:#b8d75a}
			}
			.goodcontainer p{text-align: center;height: 55px;padding-top: 25px;
					img{width: 22px;height: 22px;margin-left: 10px;}	
			}
			.goodcontainer p :nth-child(3){
				color:#999;font-size: 13px;padding: 0 10px;
			}
			.goodcontainer p .line{color:#ccc;}
			footer{position:fixed;bottom: 0;left:0;display:flex;
						justify-content: space-between;width:100%;height: 50px;
						align-items: center;background:white;
						.choosebox{
											height: 100%;display: flex;justify-content: space-between;
											align-items: center;width:75px;padding:0 8px;
											a{
												display: inline-block;width: 18px;height: 18px;border-radius: 50%;
												border: 1px solid #999;
												
											}
											
											a:hover{-webkit-tap-highlight-color:transparent;}
											span{font-size: 14px;color:#666}
						}
						p{margin-left: 100px;font-size: 13px;
							.price{color:#ff9600;font-size: 13px;display:inline-block;width: 60px;}
						}
						ul{
							width: 90px;height:100%;background: #ff9600;
							text-align: center;font-size: 15px;color:white;
							padding-top: 8px;box-sizing: border-box;margin: 0;
							.fee{
									font-size: 13px;
							}
						}
			}
			
			.choose{background:#aad03e}
			
			.goodcontainer{
				.everygood{
					display: flex;justify-content: space-between;flex-wrap: wrap;
					ul{
						width:49%;background: white;padding-bottom: 6px;margin-top:6px;
						li:nth-child(n+2){padding: 0 6px;box-sizing: border-box;line-height: 18px;
						letter-spacing:1px;}
						li:nth-child(2){text-overflow: ellipsis;overflow: hidden;white-space: nowrap;
							color:#666666;
						}
						li:nth-child(n+3){color:#ff9600;}
						li:last-child {	
							display: flex;justify-content: space-between;
							align-items: center;												
							img{
								width: 18px;height: 18px;
								}
						}
						img{
							width:100%;
							display:block
						}
					}
				}
			}
			
			
</style>
