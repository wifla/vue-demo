<template>
	<div id="app">
		<transition name="fade"
		            mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'app',
	components: {
	},
	mounted() {
		console.log(process.env, "process")
	}
}

</script>

<style lang="scss">
@import '~scss_vars';
@import '~reset';

body {
	margin: 0px;
	padding: 0px;
	font-family:Source Han Sans CN, Microsoft YaHei, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,  SimSun, sans-serif;
	font-size: px2rem(14px);
	-webkit-font-smoothing: antialiased;
    color: $primary-black;
}
#app {
	position: absolute;
	top: 0px;
	bottom: 0px;
	width: 100%;
	@include flexMixin(row,center,center);
}
</style>