<template>
  <div class="sublogin">
    <ul>
   			<li><span></span><input type="text" placeholder="用户名"/></li>
   			<li><span></span><input type="text" placeholder="密码"/></li>
   	</ul>
   		<span class="forget">忘记密码？</span>
   		<p class="deng">登  录</p>
   		<aside>
   			<span @click="changeBg" :class="[ischange?'changeBg':'']"></span>
   			我已阅读并同意本来生活网
   			<a href="https://m.benlai.com/rs/help-8.html?baseService=www.benlai.com" target="_self">
   				《用户使用协议》
   			</a>
   		</aside>
   		<div class="anthorway">
   			<p><span>————————</span><span>第三方登录</span><span>————————</span></p>
   			<div class="image">
   				<span></span>
   				<span></span>
   				<span></span>
   			</div>
   			
   		</div>
  </div>
</template>

<script>
export default {
  name: 'sublogin',
  data () {
    return {
     
      ischange:false
    }
  },
  methods:{
  	changeBg(){
  		this.ischange=!this.ischange
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.sublogin{
		margin-top: 26px;
		font-family: "黑体";		
		ul{
			li{
				width: 86%;margin: 0 auto;
				border-bottom: 1px solid #ddd;
				span{width:40px;height: 50px;display: inline-block;vertical-align: middle;
				background:url(../assets/login_ico.png) no-repeat;}
				input{
					width:84%;height: 50px;border:none;outline: none;
				}
			}
			li:first-child span{background-position: left -57px;transform: scale(0.7);}
			li:last-child span{background-position: left -187px;transform: scale(0.7);}
			li:last-child{margin-top:10px}
		}
		.forget{display: block;text-align: right;width: 86%;margin: 0 auto;padding: 5px 0 15px 0;}
		.deng{text-align: center;width: 86%;margin: 0 auto;line-height: 50px;
		border-radius: 8px;background: #ddd;font-size: 18px;color:white}
		aside{display: block;width: 86%;margin: 0 auto;padding: 15px 0;
			span{width:28px;height: 28px;display: inline-block;vertical-align: middle;
			background: url(../assets/controls_check.png) left 0px;transform: scale(0.6);}
			.changeBg{background: url(../assets/controls_check.png) left -70px;}
			a{color:#abd13e}
		}
		.anthorway{
			p{text-align: center;margin: 10px 0;
			
				span{display: inline-block;color:#ddd}
				span:nth-child(2){margin: 0 8px;}
			}
			.image{
				text-align: center;
				span{display: inline-block;width: 47px;height: 47px;margin: 10px;
				background: url(../assets/joinlogin.png) no-repeat ;
				background-size: 100px;}
				span:nth-child(1){
				background-position: -48px 2px;}
				
				span:nth-child(2){
				background-position: -48px -48px;}
				
				span:nth-child(3){
				background-position: -48px -98px;}
				
			}
		}
	}
</style>
