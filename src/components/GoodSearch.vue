
<template>
	<div>
		<div class="box">
			<header>
			  	<img class="back" src="../assets/top_back.png" alt="" @click="linkto('hello')"/>
			  	<div>
			  		<input id="s" type="text" v-model="searchdata" placeholder="麻辣小龙虾"/> 		
			  		<img class="false" src="//image.benlailife.com/static/images/mycenter/login_n_ico05_0e143fe9.png">
			  	</div>
			  <router-link to="/searchs"><a href="javascript:;" @click="savehistory(searchdata)">搜索</a></router-link> 	
		  	</header>
		</div>
	  	<component :is="comp"></component>
	  	</div>
</template>

<script>
import axios from 'axios'
import BackContent from "./BackContent"
import CurrentSearch from "./CurrentSearch"
import {mapActions} from "vuex"
export default {
  	name:"goodsearch",
  	data:function(){
  		return {
  			searchdata:"",
  			msg:'hello good search',
  			
  			goods:[],
  			comp:'current-search'
  		}
  	},
  	components:{
  		BackContent,
  		CurrentSearch
  	},
  	methods:{
  		requireData:function(){
  			var that=this;
	  			this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",{
	  				params:{
	  					wd:that.searchdata
	  				},
	  				jsonp:'cb'
	  			}).then((res)=>{
	  				that.savesearch(res.data.s)
	  				if(res.data.s.length!=0){
	  					this.comp='back-content'
	  				}else{
	  					this.comp='current-search'
	  				}

	  			})
  		},
  		linkto(where){
  			window.location.hash=where
  		},
  		...mapActions(['savesearch','savehistory'])
  		
  		
  	},
	watch:{
		searchdata(val){
			this.requireData()
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.box{height: 51px;}
	header{
 			width: 100%;
 			display:flex;
 			position: fixed;
 			top:0;
 			background-color: #FFFFFF;
 			justify-content: space-between;
 			align-items: center;
 			font-size: 26.67vw;
 			padding: .1em;
 			box-sizing: border-box;
 			border-bottom: 1px solid #ccc;
 			.back{
 				width: 0.12em;
 				height: 0.2em;
 				
 			}
 			input{
 				width: 270px;
 				height:30px;
 				border-radius: 20px;
 				border: 1px #ccc solid;
 				outline: none;
 				font-size: 14px;
 				padding-left:15px
 				}
 			a{font-size: .16em;color:#abd13e}
 			.false{
 				width:.20em;
 				height: .20em;
 				}
 			div{
 				display: flex;
 				justify-content: space-between;
 				align-items: center;
 				position:relative;
 				span{position: absolute;left: 1em;top:.33em;font-size:14px;
 				color:#ccc;z-index: 9;}
	 			img{
	 				position:absolute;
	 				right:.08em;
	 				top:.05em;
	 				}
 			}
 		}
 	.shopShow{
 		/*padding: 0 20px;*/background: #F2F2F2;height: 616px;
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
