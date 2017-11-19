<template>
  <div class="subregister">
   		<div class="account">
	  	<span class="acimg"></span><input type="text" placeholder="手机号/邮箱/用户名" />
	  	</div>
	  	<div class="account">
	  	<span class="acimg acimg1"></span><input type="text" placeholder="请输入密码" />
	  	</div>
	  	<a class="text">注&nbsp;&nbsp;册</a>
	  	<p class="agreement">
	  	<span @click="changeBg" :class="[ischange?'changeBg':'']"></span>	我已阅读并同意本来生活<a href="https://m.benlai.com/rs/help-8.html?baseService=www.benlai.com" target="_self">《用户使用协议》</a>
	  	</p>
  </div>
</template>

<script>
export default {
  name: 'subregister',
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
.account{
	width: 84%;
	margin: 7%;
	height: 50px;
	border-bottom: 1px solid #ddd;
	.acimg{
		display: inline-block;
		margin-right: 20px;
		float: left;
		margin-top: 8px;
		width: 24px;
		height: 24px;
		background: url(../assets/login_ico.png) 0 -40px no-repeat;
		background-size: 20px;
		
	}
	
	.acimg1{
		background: url(../assets/login_ico.png) 0 -124px no-repeat;
		background-size: 20px;
	}
	input{
		height: 49px;
		outline: none;
		border: none;
		float: left;
	}

}
	.text{
		display: inline-block;
		width: 80%;
		margin: 2% 10%;
		height: 50px;
		color: #FFFFFF;
		border-radius: 5px;
		background-color: #abd13e;
		text-align: center;
		line-height: 50px;
		font-size: 20px;
	}
.agreement{
	margin: 1% 10%;
	display: inline-block;
	font-size: 14px;
	height: 20px;
	line-height: 20px;
	color: #999;
	span{
		display: inline-block;
		margin-right: 5px;
		margin-top: 2px;
		float: left;
		width: 20px;
		height: 20px;
		background: url(../assets/controls_check.png) no-repeat left 0px;
		background-size: 20px;
	}
	.changeBg{
		background: url(../assets/controls_check.png) no-repeat left -45px;
		background-size: 20px;
		
	}
	a{
		color:#abd13e ;
		font-size: 14px;
	}
}
</style>
