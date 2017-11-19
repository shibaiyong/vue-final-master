
import Vue from "vue"

import Vuex from "vuex"
import actions from "./actions"
Vue.use(Vuex)

const state={
	goodmessage:[],
	Position:{
		longitude:null,
		latitude:null,
		name:null
	},
	searchcontent:[],
	searchhistory:[]

}

const getters={
	allnumber:function(state){
		var sumnum=0;
		state.goodmessage.forEach((item,index)=>{
			sumnum+=item.num;
		})
	//	console.log("getter....."+sumnum)
		return sumnum
	},
	_Position:function(state){
		return state.Position.name
	}
}
const mutations={
	
	addGood(state,good){
		//console.log("mutations.....")
		state.goodmessage.push(good)
	},
	reduce(state,id){
		var len=state.goodmessage.length;
		for(var i=0;i<len;i++){
			if(state.goodmessage[i].id==id){
				if(state.goodmessage[i].num>1){
					state.goodmessage[i].num--
				}
			}
		}
		
	},
	add(state,id){
		var len=state.goodmessage.length;
		for(var i=0;i<len;i++){
			if(state.goodmessage[i].id==id){	
				state.goodmessage[i].num++;	
			}
		}
	},
	//由于数据是引用类型所以要把num手动置1；
	remove(state,id){
		var len=state.goodmessage.length;
		for(var i=0;i<len;i++){
			if(state.goodmessage[i].id==id){
				state.goodmessage[i].num=1;
				state.goodmessage.splice(i,1)
				break;
			}
		}
	},
	putPosition(state,Position){
		
		state.Position.longitude=Position.longitude;
		state.Position.latitude=Position.latitude;
		state.Position.name=Position.name;
	},
	save(state,searchgood){
		state.searchcontent=searchgood
	},
	searchhistory(state,searchhistory){
		state.searchhistory.push(searchhistory)
		state.searchcontent=[]
	}

}

const store=new Vuex.Store({
	state,
	getters,
	mutations,
	actions
}
)
export default store