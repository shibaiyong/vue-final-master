<template>
  <div class="login">
   <header>
   		<span @click="toIndex"></span><p>登录</p>
   </header>
   <nav>
   		<span :class="[isaddclass?'bg':'']" @click="clickChange('subregister')">注册</span>
   		<span :class="[isaddclass?'':'bg']" @click="clickChange('sublogin')">账号密码登录</span>
   </nav>
   <component :is="component"></component>
  </div>
</template>

<script>
	import Sublogin from "./Sublogin"
	import Subregister from "./Subregister"
export default {
  name: 'login',
  empty:["sublogin"],
  data () {
    return {
      component: 'sublogin',
      isaddclass:true
    }
  },
  methods:{
  	clickChange(isWho){
  		this.component=isWho;
  		if(this.$options.empty[0]!=isWho){
  			this.isaddclass=!this.isaddclass;
  			this.$options.empty.splice(0,1,isWho);
  		}
  	},
  	toIndex(){
  		window.location.hash="/hello"
  	}
  },
  components:{
  	Sublogin,
  	Subregister
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	
	header{
		display: flex;justify-content: center;align-items: center;
		position: relative;height: 56px;border-bottom: 1px solid #eee;
		p{font-size: 20px;font-family:"黑体";}
		span{position: absolute;width:56px;height:50px;top:0;left:0;
		background: url(../assets/login_close.png) no-repeat center center;
		background-size: 16px 16px;
		}
	}
	nav{
		overflow: hidden;
		span{width: 50%;height: 50px;text-align: center;line-height: 50px;float:left;
		font:"黑体" 16px;}

	}
	.bg{background: #eee;}
</style>
