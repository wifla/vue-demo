<template>
	<div class="container">Home</div>
</template>

<script></script>

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