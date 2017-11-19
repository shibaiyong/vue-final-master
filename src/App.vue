<template>
  <div id="app">
    <router-view></router-view>
  </div>
  
</template>

<script>
	import {mapState} from 'vuex'
export default {
  name: 'app',
  computed:{
  	...mapState(['num'])
  }
}
</script>

<style lang="scss">
	@import './styles/_reset.scss';
	
</style>
