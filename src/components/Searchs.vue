<template>
	<div>
	<header>
  	<img src="../assets/jiantou.png" @click="toOne()"  />
  	<div>
  		
  		<input type="text" placeholder="麻辣小龙虾第2件半价" />
  		<a href="#"><img src="//image.benlailife.com/static/images/mycenter/login_n_ico05_0e143fe9.png" /></a>
  	</div>
  	<span >	<em  v-text="allnumber" v-if="isLook"></em></span>
  	</header>
  	<nav>
  		<span @click="mdzz">综合</span>
  		<span @click="huoqu" :class="{colorr:isUp}" >价格</span>
  		<span @click="mdzz">促销</span>
  		<span @click="mdzz">新品</span>
  		
  	</nav>
  	
  	<div class="everygood" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="3">
  	
  		<div class="spinner" v-if="isShow">
			  <div class="double-bounce1"></div>
			  <div class="double-bounce2"></div>
		</div>
    				<ul v-for="good in goodlist" v-if="!isShow">
    					<li><img :src="good.src"/></li>
    					<li>{{good.des}}</li>
    					<li>{{good.feature}}</li>
    					<li>¥{{good.price}}<img @click="addGood(good)" src="../assets/shopcar.png"></li>
    				</ul>
    			</div>
  	</div>

</template>

<script>
	
	import {mapState,mapGetter,mapActions,mapGetters} from "vuex"
	
	import Vue from 'vue'
import axios from  'axios'
import { Toast } from 'mint-ui'
	import { InfiniteScroll } from 'mint-ui'
	Vue.use(InfiniteScroll);
	export default{
		name:"searchs",
		data(){
			return{
				goodlist: [],
				temp:false,
				isShow:true,
				isUp:false,
				isLook:false
			
				
				
			}
		},
		methods:{
			
			mdzz(){
				Toast({
  					message:"敬请期待...",
  					duration:1000
  				
				})
			},
			loadMore(){
				var that=this;
				setTimeout(function(){
					that.isShow=false
					axios.get("./static/shopCarImage.json"
				).then((res)=>{
						var data=res.data;
						//直接给数组赋值是不对的要循环push进去
						data.forEach(function(item,index){
							that.goodlist.push(item)
						})
					})
				
				},3000)	
				//console.log(that.goodlist)	
			},
			getaa(arr){
				
				for(var i=0;i<arr.length-1;i++){
					for(var j=0;j<arr.length-1;j++){
						if(this.temp){
							if(arr[j].price>arr[j+1].price){
			                var aa=arr[j];
			                arr[j]=arr[j+1];
			                arr[j+1]= aa;
			            	}
							
						}else{
							
							if(arr[j].price<arr[j+1].price){
			                var aa=arr[j];
			                arr[j]=arr[j+1];
			                arr[j+1]= aa;
			            }
	
						}
				
					}
				
				}
				return arr
					
			},
			huoqu(){	
				this.isShow=true
				this.isUp=!this.isUp
				
				this.getaa(this.goodlist)
				this.temp=!this.temp		
				this.loadMore()
	
			},
			toOne(){
				window.location.hash="/search"
			},
			changeShow:function(){
					if(this.allnumber>0) this.isLook=true
				else this.isLook=false
			},
			...mapActions(["addGood"])
			
		},
		computed:{
			...mapGetters(["allnumber"])
		},
		watch:{
			allnumber:function(val){
				if(val>0) this.isLook=true
				else this.isLook=false
			}
		},
		mounted:function(){
				this.changeShow();
		},
		
		
	}
</script>

<style lang="scss" scoped>
	header{
 			width: 100%;
 			display:flex;
 			position: fixed;
 			z-index: 999;
 			background-color: #FFFFFF;
 			top:0;
 			height: 3.5rem;
 			img{
 				width: 20px;
 				height: 30px;
 				margin-top: 7px;
 			}
 			
 			span{
 					margin: 0.5rem;
		 			display: inline-block;
		 			padding: 0.5rem 1rem;
		 			width: 30px;
		 			height: 30px;
		 			background: url(../assets/top_new.png) 0 -200px no-repeat;
		 			background-size: 30px;
		 		
		 		}
		 	div{
		 		margin: 0.5rem;
		 		border-radius: 1.5rem;
		 		border: 1px solid #e1e1e1;
		 		flex: 1;
		 		input{
		 			border: none;
		 			position: relative;
		 			left: 3rem;
		 			top:0.3rem;
		 			outline: none;
		 		}
		 		a{
		 			img{
		 				width: 15px;
		 				height: 15px;
		 				float: right;
		 				position: relative;
		 				
		 				right: 0.5rem;
		 			}
		 		}
		 	}
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
						right: 2px;
						top:2px;
						font-size: 12px;
					}
 		}
 		nav{
 			width: 100%;
 			display:flex;
 			position: fixed;
 			z-index: 999;
 			background-color: #FFFFFF;
 			top:3.5rem;
 			height: 3.5rem;
 			justify-content: space-around;
 			border-top: 1px solid #F2F2F2;
 			border-bottom: 1px solid #F2F2F2;
 			
 	
 			span{
 				display: inline-block;
 				text-align: center;
 				line-height: 3.5rem;
 			
 			}
 		}
 .colorr{
 	color: #abd13e;
 }
.everygood{
		display: flex;justify-content: space-between;flex-wrap: wrap;
		margin-top: 7rem;
		ul{
			width:100%;background: white;padding-bottom: 6px;margin-top:6px;
			li{
				float: left;
				width: 80%;
			}
			li:first-child{
					width: 20%;
			}
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

</style>