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

<style scoped  lang="scss">
	@import '~scss_vars';
	.container{
		@include flexMixin(row,center,center);
		font-size: px2rem(28px);
		width: px2rem(500px);
		height: px2rem(500px);
		background: red;
	}
</style>