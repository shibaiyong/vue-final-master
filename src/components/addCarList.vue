<template>
	<div class="shoplist-container">
		<div class="isdisplay" v-show="isshow">
			<img src="../assets/bigcar.png">
			<p> 购物车里还没有好吃的，您可以</p>
			<span @click="toIndex">回首页逛逛</span>
		</div>
		 <div class="shopList" v-for="item in goodmessage">
				<div class="left">
					<a @click="clickChange" :name="item.id" href="javascript:;"></a>
					<img :src="item.src">
				</div>
				<ul>
					<li>{{item.des}}</li>
					<li>
						<span>¥{{(item.price*item.num).toFixed(1)}}</span>
						<span @click="reduce(item.id)"></span>
						<input type="text" :value="item.num"/>
						<span @click="add(item.id)"></span>
						<button class="btn btn-danger" @click="remove(item.id)" v-show="showdelet">删除</button>
					</li>
				</ul>		
		</div>

  </div>
</template>
<script>	
import {mapState,mapGetters,mapActions} from "vuex"

export default {
  name: 'add-carlist',
  data () {
    return {
      allTure:false,
      goods:null,
      len:null,
      sumPrice:0,
      isshow:true
    }
  },
  props:["isallchoose","showdelet"],
  methods:{
  	toIndex(){
  		window.location.hash="/hello"
  	},
  	clickChange(e){ 		
  		var ev=e||event;
  		var elem=e.target;
  		elem.className=elem.className!=="choose"?"choose":""
  		this.isallChoose()
  		this.sum()
  	},
  	judgeAllchoose(isall){ 		
  		var oA=document.getElementsByTagName("a");
  		if(isall){
	  		for(var i=0;i<oA.length;i++){	
	  			if(oA[i].className=="choose"){
	  				continue;
	  			}
	  				oA[i].className="choose";	
	  			}
	  			this.allTure=true
  		}else{ 				
			for(var i=0;i<oA.length;i++){	
				if(this.allTure){
					oA[i].className=" ";
				}	
  			}
  			}
  		this.sum()
  		}, 
  		
		...mapActions(["add"]),
		...mapActions(["reduce"]),
		...mapActions(["remove"]),
		
  		isallChoose(){
  			var oA=document.getElementsByTagName("a");
  			var len=oA.length
  			if(len==1){this.allTure=false;return}
  			for(var i=0;i<len-1;i++){	
	  			if(oA[i].className!=="choose"){
	  				 this.allTure=false;
	  				 break
	  			}
	  			if(i==(len-2)){
	  				this.allTure=true;	
	  			}
	  		}
  		},
  		sum(){
  			var _a=document.getElementsByTagName("a");
		  	var _len=_a.length-1;
		  	this.len=_len;
		  	var sum=0;
		  	for(var i=0;i<_len;i++){
		  		if(_a[i].className=="choose"){
		  			this.goodmessage.forEach((item,index)=>{
		  				if(_a[i].name==item.id){
		  					sum+=+(item.price*item.num).toFixed(2)
		  				}
		  			})
		  		}
		  	}
		  	this.sumPrice=sum;
  		}
  },
  computed:{
  	...mapState(["goodmessage"]),
  	...mapGetters(["allnumber"])
  },
  watch:{
  	isallchoose:function(){
  		
  		var _isall=this.isallchoose
  		
  		this.judgeAllchoose(_isall)
  	},
  	allTure:function(){
  		var _allTure=this.allTure
  		this.$emit("tell-farther",_allTure)
  	},
  	len:function(){
  		this.isallChoose()
  		this.sum()
  		if(this.len<=0){	
  			this.isshow=true
  		}else{
  			this.isshow=false
  		}
  		
  	},
  	sumPrice:function(){
  		var money=this.sumPrice
  		this.$emit("change-money",money)
  	},
  	goodmessage:{
  		handler:function(){
  			this.sum()
  		},
  		deep:true
  	}
  	
  },
  //当页面切换时，重新检测长度，来判断是否显示购物车。
  mounted:function(){
  	this.len=document.getElementsByTagName("a");
  },
 
  updated:function(){
  	this.len=document.getElementsByTagName("a");
  	//console.log("updated......."+this.len)
  }
}
</script>

<style lang="scss" scoped>
		.shopList{
				display: flex;justify-content: space-between;background: white;
				padding: 14px 0;margin-bottom: 10px;
				.left{
					width:32%;
					img{
						width: 80px;height: 80px;vertical-align: middle;
					}
					
					a:hover{-webkit-tap-highlight-color:transparent;}
					a{display: inline-block;width: 18px;height: 18px;border-radius: 50%;
						border: 1px solid #999;margin: 0 8px;vertical-align: middle;}
				}
				ul{width: 68%;display: flex;flex-direction: column;justify-content: space-between;
					padding-left: 16px;box-sizing: border-box;
					li:nth-child(1){color:#666;font-size: 13px;}
					li:last-child{
						display: flex;justify-content: flex-start;align-items: center;
						button{width:30px;height: 25px;font-size: 12px;padding: 0;line-height: 25px;
						margin-left: 30px;}
					}
					input{width: 32px;height: 25px;box-sizing: border-box;border:1px solid #ccc;outline-style:none;text-align: center;}
					li:last-child :first-child{color:#ff9600;font-size: 14px;margin-right: 20px;font-weight: bold;
					display:inline-block;width: 60px;}
					li:last-child :nth-child(2),li:last-child :nth-child(4){width:30px;height: 25px;border: 1px solid #ccc;
						display: inline-block;box-sizing: border-box;background:url(../assets/add_symbol.png);
					}
					li:last-child :nth-child(2){background-position: 8px -26px;background-size: 45px;padding: 6px;
					box-sizing: border-box;background-clip: content-box;border-right: none;}
					li:last-child :nth-child(4){background-position: 8px 7px;background-size: 45px;padding: 6px;
					box-sizing: border-box;background-clip: content-box;border-left: none;}
				}
			}
			.choose{background:#aad03e}
			.minheight{min-height: 254px;}
			.isdisplay{
				text-align: center;background: white;padding-bottom: 20px;
				
				img{display: block;margin:0 auto;width: 40%;height: 40%;}
				p{font-size: 13px;color:#444;margin: 15px 0;}
				span{display: inline-block;border: 1px solid #add13e;
				width:35%;padding:12px 0;color:#add13e;border-radius: 5px;font-size: 13px;
				letter-spacing: 2px;}
			}
</style>
