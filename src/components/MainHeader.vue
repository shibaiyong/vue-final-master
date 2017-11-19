<template>
	
	<header>
		<span class="Position" v-text="_Position?_Position:'定位中...'"></span>
		<input type="text" placeholder="             麻辣小龙虾第二份半价" @click="toSearch"/>
		<span class="btn-login" @click="toLogin">登录</span>
	</header>
</template>

<script>
	import {mapActions,mapState,mapGetters} from "vuex"
	export default {
		name:"main-header",
		methods:{
			
			toSearch(){
				window.location.hash="/search"
			},
			...mapActions(["putPosition"]),
			toLogin:function(){
				window.location.hash="/mine"
			},
			getPosition:function(){
				
				var that=this;
				  var map, geolocation;
    //加载地图，调用浏览器定位服务
    map = new AMap.Map('container', {
        resizeEnable: true
    });
    map.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 5000,          //超过10秒后停止定位，默认：无穷大
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        
        AMap.event.addListener(geolocation, 'complete', function(data){
        	
var arr=[data.position.getLng(),data.position.getLat()];

	 var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all"
        }); 
	   geocoder.getAddress(arr,function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                 var address = result.regeocode.formattedAddress; //返回地址描述
                  var Position={
					longitude:arr[0],
					latitude:arr[1],
					name:result.regeocode.addressComponent.province
	};
	
	that.putPosition(Position);
		
            }
      
        });        
        	
        });
    });
   
   
			}
		},
		
		
		
		data:function(){
			return {
				
		}
			},
		mounted(){
			if(this._Position) return;
			this.getPosition();
		
		},
		computed:{
			...mapGetters(["_Position"])
		}
	}
	
	
</script>

<style lang="scss" scoped>
	
	header{width:100%;height: 6vh;border-bottom: 1px solid #ccc;display: flex; justify-content: space-between;font:2vh/5vh "微软雅黑";padding: 1vh 0;
	.Position{color: #444;padding: 0 2vw;}
	.btn-login{color:#0085FF;padding: 0 2vw;}
	input{flex: 1;border-radius: 2.5vh;border: 1px #aaa solid;outline: none; font: 2vh/4vh "微软雅黑"; height: 4vh;vertical-align:middle;}
	
	}
</style>