import { Toast } from 'mint-ui'

var arr=[];
var brr=[];
const actions = {
	
	addGood({commit},good){
		Toast({
  					message:"加入购物车成功!",
  					duration:1000,
  					iconClass: 'iconfont icon-chenggong-copy'
				})

		//console.log("actinacition.....")
		if(arr==[]){
			commit("addGood",good)
		}else{
			for(var i=0;i<arr.length;i++){
				if(arr[i].id==good.id){
					//console.log("repeat........")
					arr[i].num++;
					return;
				}
			}
			arr.push(good)
			commit("addGood",good)
		}	
	},
	
	reduce({commit},id){
		commit("reduce",id)
	},
	add({commit},id){
		commit("add",id)
	},
	remove({commit},id){
		for(var i=0;i<arr.length;i++){
			if(arr[i].id==id){
				arr.splice(i,1)
			}
		}
		commit("remove",id)
	},
	putPosition({commit},Position){
		//console.log("actions...Position")
		commit("putPosition",Position)
	},
	savesearch({commit},savegood){
		
		commit("save",savegood)
	},
	savehistory({commit},searchhistory){
		
		if(brr==[]){
			brr.push(searchhistory)
		}else{
			for(var i=0;i<arr.length;i++){
				if(arr[i]==searchhistory){
					return;
				}
			}
			arr.push(searchhistory)
			commit("searchhistory",searchhistory)
		}
		window.open("https://www.baidu.com/s?wd="+searchhistory)
	}

	
}

export default actions
