
<template>
<div>
  <main-header></main-header>
  <main-nav></main-nav>
  <main-footer></main-footer>
  </div>
</template>

<script>
	
	import {mapState,mapGetters,mapActions} from 'vuex'
	import MainHeader from "./MainHeader"
	import MainNav from "./MainNav"
	
	import MainFooter from "./Footer"
export default {
  	name:"Hello",
  	components:{
  		MainHeader,
  		MainNav,
  	
  		MainFooter
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
