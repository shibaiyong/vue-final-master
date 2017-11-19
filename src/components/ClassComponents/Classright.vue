<template>
  <div class="list-right">
 			
 				<span class="top" >全部{{active}}</span>
 				<lists :active='active' :num='num'></lists>
 			
  </div>
</template>

<script>
import Classone from './Classone'
export default {
  name:'class-right',
  props:['active','num'],
  data () {
    return {
    	
    }
  },
  components:{
  	'lists':Classone
  }
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.list-right{
	float: right;
	width: 280px;
	height: 100%;
	background-color: #f2f2f2;
	position: relative;
	.top{
		display: inline-block;
		margin: 10px;
		width: 260px;
		height: 45px;
		background-color: #FFFFFF;
		text-align: center;
		line-height: 45px;
	}
}


</style>
