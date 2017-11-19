<template>
  <div class="lists">
 			
 				
 				<a class="top tui">本来推荐</a>
 				<div class="shoplist" v-for="shop in shops"  >
 			<a @click="todetial(shop.id,num)">
 						<img :src="shop.src" />
 						<p>{{shop.des}}</p>
 						</a>
 				
 				</div>
 				<a class="top tui">料理之味</a>
 				<div class="shoplist" v-for="shop in shopss">
 					<a @click="todetial(shop.id)">
 						<img :src="shop.src" />
 						<p>{{shop.des}}</p>
 						</a>
 				</div>
 				<a class="top tui">有机生活</a>
 				<div class="shoplist" v-for="shop in shopsss">
 					<a @click="todetial(shop.id)">
 						<img :src="shop.src" />
 						<p>{{shop.des}}</p>
 						</a>
 				</div>
 			
  </div>
</template>

<script>
	
import axios from  'axios'
export default {
  name:'lists',
  props:['active','num'],
  data () {
    return {
    	shops:[],
    	shopss:[],
    	shopsss:[]
    }
  },
  methods:{
  	getShop(){
  		axios.get('./static/jsons/shops.json').then(function(date){
  				
  				var data=date.data[this.num][0]
  				var data1=date.data[this.num][1]
  				var data2=date.data[this.num][2]
  				for(var i=0;i<data.length;i++){
  					this.shops.push(data[i])
  				}
  				for(var i=0;i<data1.length;i++){
  					this.shopss.push(data1[i])
  				}
  				for(var i=0;i<data2.length;i++){
  					this.shopsss.push(data2[i])
  				}
  					
  				
  						
  				
  		
  			
  		}.bind(this))
  	},
  	todetial(shop,num){
  		window.location.hash="/details/"+shop+"/"+this.num
  	}
  },
  mounted(){
  	this.getShop()
  },
  watch:{
  
  	num(val){
  		if(val){
 				this.shops=[]
 				this.shopss=[]
 				this.shopsss=[]
				 this.getShop()
  		}	  
  	}
  }
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.lists{
	width: 260px;
	margin: 0 7px 50px 10px;
	background-color: #FFFFFF;
	.top{
		display: inline-block;
		
		width: 260px;
		height: 45px;
		background-color: #FFFFFF;
		text-align: center;
		line-height: 45px;
		overflow: hidden;
	}
	.tui{
		font-weight: bold;
		text-align: left;
		background-color: #F2F2F2;
	}
	.shoplist{
		display: inline-block;
		width: 85px;
		height: 85px;
		text-align: center;
		font-size: 12px;
	
		margin-bottom: 7px;
		img{
			width: 60px;
			height: 60px;
			margin: 5px 12px;
		}
		
	}
}


</style>
