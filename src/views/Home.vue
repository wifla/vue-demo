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
		.px2rem(font-size, 30);
	}
</style>