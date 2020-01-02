<template>
	<div class="container">Home count: {{count}}</div>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		name: 'container',
		computed: {
			...mapState({
	        	count: state => state.count
	    	}),
		},
		mounted(){
			console.log(this.count)
		}
	}
</script>

<style scoped  lang="less">
	@import '~scss_vars';
	.container{
		font-size: 30px;
		background: red;
		width: 375px;
	}
</style>